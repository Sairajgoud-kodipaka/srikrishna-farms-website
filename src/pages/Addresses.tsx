import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Address {
  id: string;
  type: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

const mockAddresses: Address[] = [
  {
    id: '1',
    type: 'Home',
    street: '123 Main St',
    city: 'Hyderabad',
    state: 'Telangana',
    zipCode: '500001',
    isDefault: true,
  },
  {
    id: '2',
    type: 'Office',
    street: '456 Business Park',
    city: 'Hyderabad',
    state: 'Telangana',
    zipCode: '500081',
    isDefault: false,
  },
];

const Addresses = () => {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    type: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setAddresses(prev => prev.map(addr => 
        addr.id === editingId 
          ? { ...addr, ...formData }
          : addr
      ));
      toast({
        title: "Success",
        description: "Address has been updated.",
      });
    } else {
      const newAddress: Address = {
        id: Date.now().toString(),
        ...formData,
        isDefault: addresses.length === 0,
      };
      setAddresses(prev => [...prev, newAddress]);
      toast({
        title: "Success",
        description: "New address has been added.",
      });
    }

    setShowForm(false);
    setEditingId(null);
    setFormData({
      type: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    });
  };

  const handleEdit = (address: Address) => {
    setFormData({
      type: address.type,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    });
    setEditingId(address.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    toast({
      title: "Success",
      description: "Address has been deleted.",
    });
  };

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id,
    })));
    toast({
      title: "Success",
      description: "Default address has been updated.",
    });
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-merriweather font-bold text-green-dark">
              My Addresses
            </h1>
            <Button
              onClick={() => {
                setShowForm(true);
                setEditingId(null);
                setFormData({
                  type: '',
                  street: '',
                  city: '',
                  state: '',
                  zipCode: '',
                });
              }}
              className="bg-green-dark hover:bg-green-light"
            >
              <Plus size={16} className="mr-2" />
              Add New Address
            </Button>
          </div>

          {showForm && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-green-dark mb-4">
                {editingId ? 'Edit Address' : 'Add New Address'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Address Type
                  </label>
                  <Input
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Home, Office, etc."
                    required
                    className="w-full border-green-light focus:ring-green-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Street Address
                  </label>
                  <Input
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Enter street address"
                    required
                    className="w-full border-green-light focus:ring-green-dark"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-dark mb-2">
                      City
                    </label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                      className="w-full border-green-light focus:ring-green-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-dark mb-2">
                      State
                    </label>
                    <Input
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      required
                      className="w-full border-green-light focus:ring-green-dark"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    ZIP Code
                  </label>
                  <Input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Enter ZIP code"
                    required
                    className="w-full border-green-light focus:ring-green-dark"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-dark hover:bg-green-light"
                  >
                    {editingId ? 'Save Changes' : 'Add Address'}
                  </Button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-4">
            {addresses.map(address => (
              <div
                key={address.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-green-dark">
                        {address.type}
                      </h3>
                      {address.isDefault && (
                        <span className="text-xs bg-green-light/20 text-green-dark px-2 py-1 rounded">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{address.street}</p>
                    <p className="text-gray-600">
                      {address.city}, {address.state} {address.zipCode}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(address)}
                      className="text-green-dark hover:text-green-light"
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(address.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                {!address.isDefault && (
                  <Button
                    variant="link"
                    onClick={() => handleSetDefault(address.id)}
                    className="text-green-dark hover:text-green-light mt-2"
                  >
                    Set as Default
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addresses; 