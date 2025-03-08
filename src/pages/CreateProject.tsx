
import { useState } from 'react';
import { Upload, Plus, Minus, AlertCircle } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const categories = [
  'Technology',
  'Education',
  'Arts',
  'Sports',
  'Music',
  'Infrastructure',
  'Other'
];

const CreateProject = () => {
  const [rewards, setRewards] = useState([{ title: '', amount: '', description: '' }]);
  
  const addReward = () => {
    setRewards([...rewards, { title: '', amount: '', description: '' }]);
  };
  
  const removeReward = (index: number) => {
    const updatedRewards = [...rewards];
    updatedRewards.splice(index, 1);
    setRewards(updatedRewards);
  };
  
  const handleRewardChange = (index: number, field: string, value: string) => {
    const updatedRewards = [...rewards];
    updatedRewards[index] = { ...updatedRewards[index], [field]: value };
    setRewards(updatedRewards);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary/80 mb-2 block">Project Creation</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Start a New Project</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your vision and set up your project for the NS School community to invest in
            </p>
          </div>
          
          <form className="space-y-10">
            {/* Basic Information */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Basic Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Enter a clear, specific title"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="" disabled selected>Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    id="shortDescription"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Brief summary (150 characters max)"
                    maxLength={150}
                  />
                </div>
                
                <div>
                  <label htmlFor="fullDescription" className="block text-sm font-medium mb-1">
                    Full Description
                  </label>
                  <textarea
                    id="fullDescription"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Detailed description of your project, its goals, and impact on the school"
                  ></textarea>
                </div>
              </div>
            </section>
            
            {/* Funding Details */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Funding Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="fundingGoal" className="block text-sm font-medium mb-1">
                    Funding Goal ($)
                  </label>
                  <input
                    type="number"
                    id="fundingGoal"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Enter amount in USD"
                    min="100"
                  />
                </div>
                
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium mb-1">
                    Campaign Duration (days)
                  </label>
                  <input
                    type="number"
                    id="duration"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Number of days"
                    min="7"
                    max="60"
                  />
                </div>
              </div>
            </section>
            
            {/* Project Media */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Project Media</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Main Project Image
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-2">Drag and drop your main project image here</p>
                    <p className="text-xs text-muted-foreground mb-4">PNG, JPG or GIF (max. 5MB)</p>
                    <button type="button" className="button-outline">
                      Browse files
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Gallery Images (optional)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <p className="text-muted-foreground mb-2">Drag and drop up to 5 additional images</p>
                    <p className="text-xs text-muted-foreground mb-4">PNG, JPG or GIF (max. 5MB each)</p>
                    <button type="button" className="button-outline">
                      Browse files
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Rewards */}
            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Investment Options</h2>
                <button 
                  type="button" 
                  onClick={addReward}
                  className="text-primary flex items-center gap-1 hover:underline"
                >
                  <Plus size={18} /> Add Option
                </button>
              </div>
              
              <div className="space-y-6">
                {rewards.map((reward, index) => (
                  <div key={index} className="card p-6 relative">
                    {rewards.length > 1 && (
                      <button 
                        type="button"
                        onClick={() => removeReward(index)}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"
                      >
                        <Minus size={18} />
                      </button>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor={`reward-title-${index}`} className="block text-sm font-medium mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          id={`reward-title-${index}`}
                          value={reward.title}
                          onChange={(e) => handleRewardChange(index, 'title', e.target.value)}
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="e.g., Supporter, Contributor"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor={`reward-amount-${index}`} className="block text-sm font-medium mb-1">
                          Amount ($)
                        </label>
                        <input
                          type="number"
                          id={`reward-amount-${index}`}
                          value={reward.amount}
                          onChange={(e) => handleRewardChange(index, 'amount', e.target.value)}
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Investment amount"
                          min="1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor={`reward-description-${index}`} className="block text-sm font-medium mb-1">
                        Description & Perks
                      </label>
                      <textarea
                        id={`reward-description-${index}`}
                        value={reward.description}
                        onChange={(e) => handleRewardChange(index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Describe what investors get at this level"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Terms and Submission */}
            <section className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle size={24} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Before you submit</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your project will be reviewed by NS School administration before being published. Please ensure all information is accurate and meets school guidelines.
                    </p>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="terms" className="w-4 h-4" />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button type="button" className="button-outline">
                  Save as Draft
                </button>
                <button type="submit" className="button-primary">
                  Submit for Review
                </button>
              </div>
            </section>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateProject;
