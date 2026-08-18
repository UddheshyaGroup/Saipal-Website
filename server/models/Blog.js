import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, default: 'Saipal Admin' },
  date: { type: String, required: true },
  image: { type: String, required: true }, // cover image url
  summary: { type: String, required: true },
  content: { type: String, required: true },
  division: { type: String, enum: ['school', 'college', 'all'], default: 'college' },
  type: { type: String, enum: ['blog', 'news'], default: 'blog' }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
