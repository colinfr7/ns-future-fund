
import { useState } from 'react';
import { Wallet, Landmark, BookOpen, BarChart3, Settings, Calendar, ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import ProjectCard, { Project } from '@/components/ui/project-card';

const userProjects: Project[] = [
  {
    id: '7',
    title: 'Computer Lab Upgrade',
    description: 'Replace aging computers and add VR workstations to the main computer lab',
    image: 'https://images.unsplash.com/photo-1547082299-de196ba44eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
    target: 20000,
    raised: 14500,
    daysLeft: 12,
    supporters: 98
  },
  {
    id: '8',
    title: 'Junior Library Enhancement',
    description: 'Create a dedicated reading area for junior students with age-appropriate books',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Education',
    target: 8000,
    raised: 2500,
    daysLeft: 28,
    supporters: 32
  }
];

const investedProjects: Project[] = [
  {
    id: '1',
    title: 'STEM Innovation Lab',
    description: 'Create a cutting-edge laboratory for advanced science and technology projects',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
    target: 25000,
    raised: 18750,
    daysLeft: 15,
    supporters: 143
  },
  {
    id: '4',
    title: 'Sports Equipment Upgrade',
    description: 'Replace outdated sports equipment and expand fitness facilities',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Sports',
    target: 12000,
    raised: 7200,
    daysLeft: 18,
    supporters: 84
  },
  {
    id: '6',
    title: 'Music Department Instruments',
    description: 'Purchase new musical instruments for the school band and orchestra',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Music',
    target: 18000,
    raised: 6300,
    daysLeft: 25,
    supporters: 71
  }
];

const transactionHistory = [
  {
    id: 'txn1',
    type: 'investment',
    amount: 250,
    project: 'STEM Innovation Lab',
    date: '2023-10-12',
    status: 'completed'
  },
  {
    id: 'txn2',
    type: 'investment',
    amount: 100,
    project: 'Sports Equipment Upgrade',
    date: '2023-10-05',
    status: 'completed'
  },
  {
    id: 'txn3',
    type: 'earning',
    amount: 45,
    project: 'Art & Design Studio',
    date: '2023-09-28',
    status: 'completed'
  },
  {
    id: 'txn4',
    type: 'investment',
    amount: 500,
    project: 'Music Department Instruments',
    date: '2023-09-20',
    status: 'completed'
  },
  {
    id: 'txn5',
    type: 'earning',
    amount: 120,
    project: 'Computer Lab Upgrade',
    date: '2023-09-15',
    status: 'completed'
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-10">
            {/* Dashboard cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Total Invested</p>
                  <h3 className="text-2xl font-bold">$950.00</h3>
                  <p className="text-sm text-green-500 flex items-center">
                    <ArrowUpRight size={14} className="mr-1" /> 12% from last month
                  </p>
                </div>
              </div>
              
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Total Earnings</p>
                  <h3 className="text-2xl font-bold">$165.00</h3>
                  <p className="text-sm text-green-500 flex items-center">
                    <ArrowUpRight size={14} className="mr-1" /> 8% from last month
                  </p>
                </div>
              </div>
              
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Active Projects</p>
                  <h3 className="text-2xl font-bold">5</h3>
                  <p className="text-sm text-green-500 flex items-center">
                    <ArrowUpRight size={14} className="mr-1" /> 2 new this month
                  </p>
                </div>
              </div>
              
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Next Payout</p>
                  <h3 className="text-2xl font-bold">Oct 31</h3>
                  <p className="text-sm text-muted-foreground">Estimated: $45.00</p>
                </div>
              </div>
            </div>
            
            {/* Transaction history */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-6 font-medium">Transaction</th>
                        <th className="text-left py-4 px-6 font-medium">Amount</th>
                        <th className="text-left py-4 px-6 font-medium">Date</th>
                        <th className="text-left py-4 px-6 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionHistory.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-border hover:bg-muted/30">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-full ${
                                transaction.type === 'investment' ? 'bg-blue-100' : 'bg-green-100'
                              }`}>
                                <DollarSign size={16} className={
                                  transaction.type === 'investment' ? 'text-blue-600' : 'text-green-600'
                                } />
                              </div>
                              <div>
                                <p className="font-medium">{transaction.project}</p>
                                <p className="text-xs text-muted-foreground capitalize">{transaction.type}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className={transaction.type === 'investment' ? 'text-red-500' : 'text-green-500'}>
                              {transaction.type === 'investment' ? '-' : '+'}${transaction.amount}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-muted-foreground">
                            {transaction.date}
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600 capitalize">
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Investment portfolio */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">My Investments</h2>
                <button className="text-primary hover:underline">View All</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'projects':
        return (
          <div className="space-y-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">My Created Projects</h2>
              <button className="button-primary">Create New Project</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
        
      case 'earnings':
        return (
          <div className="space-y-10">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-6">Earnings Summary</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm mb-1">Total Earnings</p>
                  <h3 className="text-2xl font-bold">$165.00</h3>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm mb-1">Pending</p>
                  <h3 className="text-2xl font-bold">$45.00</h3>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm mb-1">Paid Out</p>
                  <h3 className="text-2xl font-bold">$120.00</h3>
                </div>
              </div>
              
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p>Earnings Chart Placeholder</p>
              </div>
            </div>
            
            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-6">Earnings by Project</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div>
                    <h3 className="font-medium">Computer Lab Upgrade</h3>
                    <p className="text-sm text-muted-foreground">18 supporters</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-500 font-medium">$120.00</p>
                    <p className="text-xs text-muted-foreground">Last payout: Sept 15</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div>
                    <h3 className="font-medium">Art & Design Studio</h3>
                    <p className="text-sm text-muted-foreground">7 supporters</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-500 font-medium">$45.00</p>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="space-y-10">
            <div className="card p-8 max-w-2xl">
              <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">JD</span>
                  </div>
                  <div>
                    <button className="button-outline">Change Avatar</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        defaultValue="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">
                      Role at NS School
                    </label>
                    <input
                      type="text"
                      id="role"
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      defaultValue="Teacher"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      defaultValue="Math teacher with a passion for technology integration in education."
                    ></textarea>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button className="button-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card p-8 max-w-2xl">
              <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Project Updates</p>
                    <p className="text-sm text-muted-foreground">Receive updates about projects you've invested in</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Earnings Notifications</p>
                    <p className="text-sm text-muted-foreground">Get notified when you receive new earnings</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Newsletter</p>
                    <p className="text-sm text-muted-foreground">Receive monthly newsletter with platform updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-64 shrink-0">
              <div className="card overflow-hidden sticky top-24">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">JD</span>
                    </div>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Teacher</p>
                    </div>
                  </div>
                </div>
                
                <nav className="p-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'overview' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <BarChart3 size={18} />
                    <span>Overview</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'projects' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <BookOpen size={18} />
                    <span>My Projects</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('earnings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'earnings' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <Landmark size={18} />
                    <span>Earnings</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'settings' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                </nav>
              </div>
            </aside>
            
            {/* Main content */}
            <div className="flex-grow">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
