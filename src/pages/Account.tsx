import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Account = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, this would make an API call to update user details
      toast({
        title: "Success",
        description: "Your account details have been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update account details.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-cream">
        <NavBar />
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-4">
            Please Log In
          </h1>
          <p className="text-green-dark">
            You need to be logged in to view this page.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <NavBar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-8">
            Account Details
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-green-dark text-cream text-xl">
                  {user.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold text-green-dark">{user.name}</h2>
                <p className="text-green-light">{user.email}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-green-dark mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-green-light focus:ring-green-dark"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-green-dark mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-green-light focus:ring-green-dark"
                />
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold text-green-dark mb-4">
                  Change Password
                </h3>

                <div className="space-y-4">
                  <div>
                    <label 
                      htmlFor="currentPassword" 
                      className="block text-sm font-medium text-green-dark mb-2"
                    >
                      Current Password
                    </label>
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full border-green-light focus:ring-green-dark"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="newPassword" 
                      className="block text-sm font-medium text-green-dark mb-2"
                    >
                      New Password
                    </label>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full border-green-light focus:ring-green-dark"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="confirmNewPassword" 
                      className="block text-sm font-medium text-green-dark mb-2"
                    >
                      Confirm New Password
                    </label>
                    <Input
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      type="password"
                      value={formData.confirmNewPassword}
                      onChange={handleChange}
                      className="w-full border-green-light focus:ring-green-dark"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-green-dark hover:bg-green-light"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account; 