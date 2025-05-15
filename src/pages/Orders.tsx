import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: string;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: string;
  items: OrderItem[];
}

const mockOrders: Order[] = [
  {
    id: 'ORD001',
    date: '2024-02-15',
    status: 'delivered',
    total: '₹580',
    items: [
      {
        id: '1',
        name: 'Fresh Milk',
        quantity: 2,
        price: '₹160',
        image: '/images/products/milk.jpg',
      },
      {
        id: '2',
        name: 'Organic Curd',
        quantity: 1,
        price: '₹420',
        image: '/images/products/curd.jpg',
      },
    ],
  },
  {
    id: 'ORD002',
    date: '2024-02-10',
    status: 'delivered',
    total: '₹340',
    items: [
      {
        id: '3',
        name: 'Ghee',
        quantity: 1,
        price: '₹340',
        image: '/images/products/ghee.jpg',
      },
    ],
  },
];

const Orders = () => {
  const { user } = useAuth();
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);

  const toggleOrder = (orderId: string) => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-8">
            Order History
          </h1>

          <div className="space-y-4">
            {mockOrders.map(order => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleOrder(order.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-4">
                        <h3 className="font-semibold text-green-dark">
                          Order #{order.id}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-green-dark">
                        {order.total}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-green-dark"
                      >
                        {expandedOrders.includes(order.id) ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {expandedOrders.includes(order.id) && (
                  <div className="border-t border-gray-100 p-6">
                    <div className="space-y-4">
                      {order.items.map(item => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-4"
                        >
                          <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium text-green-dark">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                          <div className="text-green-dark font-medium">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-green-dark">
                          Total Amount
                        </span>
                        <span className="font-semibold text-green-dark">
                          {order.total}
                        </span>
                      </div>
                    </div>
                  </div>
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

export default Orders; 