
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment Successful",
        description: "Your order has been placed successfully!",
      });
      clearCart();
      navigate("/");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream">
        <NavBar />
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-4">No Items to Pay For</h1>
          <p className="mb-8">You need to add items to your cart and complete checkout first.</p>
          <Link to="/shop">
            <Button className="bg-green-dark hover:bg-green-light">
              Go to Shop
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <NavBar />
      
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-merriweather font-bold text-green-dark mb-8">Payment</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-merriweather font-semibold mb-4 text-green-dark">Payment Method</h2>
                
                <div className="flex space-x-4 mb-6">
                  <Button
                    type="button"
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    className={paymentMethod === "card" ? "bg-green-dark hover:bg-green-dark" : ""}
                    onClick={() => setPaymentMethod("card")}
                  >
                    Credit/Debit Card
                  </Button>
                  
                  <Button
                    type="button"
                    variant={paymentMethod === "upi" ? "default" : "outline"}
                    className={paymentMethod === "upi" ? "bg-green-dark hover:bg-green-dark" : ""}
                    onClick={() => setPaymentMethod("upi")}
                  >
                    UPI Payment
                  </Button>
                  
                  <Button
                    type="button"
                    variant={paymentMethod === "cod" ? "default" : "outline"}
                    className={paymentMethod === "cod" ? "bg-green-dark hover:bg-green-dark" : ""}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    Cash on Delivery
                  </Button>
                </div>
                
                {paymentMethod === "card" && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number*
                      </label>
                      <Input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.cardNumber}
                        onChange={handleCardDetailsChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name*
                      </label>
                      <Input
                        type="text"
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={cardDetails.cardName}
                        onChange={handleCardDetailsChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date*
                        </label>
                        <Input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={cardDetails.expiryDate}
                          onChange={handleCardDetailsChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV*
                        </label>
                        <Input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={cardDetails.cvv}
                          onChange={handleCardDetailsChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Link to="/checkout">
                        <Button variant="outline" type="button">
                          Back
                        </Button>
                      </Link>
                      
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="bg-green-dark hover:bg-green-light"
                      >
                        {loading ? "Processing..." : `Pay ₹${cartTotal + 40}`}
                      </Button>
                    </div>
                  </form>
                )}
                
                {paymentMethod === "upi" && (
                  <div className="py-4">
                    <p className="mb-4">Pay using your favorite UPI app by scanning the QR code or using the UPI ID below:</p>
                    
                    <div className="bg-white p-8 rounded-lg text-center mb-6">
                      <div className="mx-auto w-48 h-48 bg-gray-200 flex items-center justify-center mb-4">
                        <span className="text-gray-500">QR Code Placeholder</span>
                      </div>
                      <p className="font-bold">UPI ID: krishnadairy@ybl</p>
                    </div>
                    
                    <Button 
                      onClick={handleSubmit} 
                      disabled={loading} 
                      className="w-full bg-green-dark hover:bg-green-light"
                    >
                      {loading ? "Verifying Payment..." : "I've Completed the Payment"}
                    </Button>
                  </div>
                )}
                
                {paymentMethod === "cod" && (
                  <div className="py-4">
                    <p className="mb-6">You'll pay the amount of ₹{cartTotal + 40} when your order is delivered.</p>
                    
                    <Button 
                      onClick={handleSubmit} 
                      disabled={loading} 
                      className="w-full bg-green-dark hover:bg-green-light"
                    >
                      {loading ? "Processing..." : "Place Order with Cash on Delivery"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-merriweather font-semibold mb-4 text-green-dark">Order Summary</h2>
                
                <div className="space-y-4 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                      </div>
                      <div className="font-medium">
                        {item.price.includes('/') 
                          ? `₹${parseInt(item.price.match(/₹(\d+)/)?.[1] || "0") * item.quantity}` 
                          : item.price}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span>₹40</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span className="text-terracotta">₹{cartTotal + 40}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;
