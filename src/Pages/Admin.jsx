import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../firebase';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });

    fetchProjects();
    return () => unsubscribe();
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const imageFile = data.image[0];
      const storageRef = ref(storage, `projects/${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, 'projects'), {
        title: data.title,
        description: data.description,
        techStack: data.techStack.split(',').map(tech => tech.trim()),
        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
        imageUrl,
      });

      toast.success('Project added successfully!');
      reset();
      fetchProjects();
    } catch (error) {
      console.error('Error adding project:', error);
      toast.error('Failed to add project');
    }
  };

  const handleDelete = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', projectId));
        toast.success('Project deleted successfully!');
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
        toast.error('Failed to delete project');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-[#1F252E]">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Admin Dashboard</h2>

      <div className="max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Add New Project</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Title</label>
            <input
              {...register('title')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              {...register('description')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600"
            ></textarea>
          </div>

          <div>
            <label className="block text-white mb-2">Tech Stack (comma-separated)</label>
            <input
              {...register('techStack')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2">GitHub URL</label>
            <input
              {...register('githubUrl')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Live URL</label>
            <input
              {...register('liveUrl')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Project Image</label>
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-[#f9532d] text-white font-semibold hover:bg-opacity-90"
          >
            Add Project
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-white">Existing Projects</h3>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#27293d] p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;