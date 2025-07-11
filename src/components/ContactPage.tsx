import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
} from "lucide-react";
import MatrixBackground from "./MatrixBackground";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "stakweblimited@gmail.com",
      href: "mailto:stakweblimited@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+254 747 880 416",
      href: "tel:+254747880416",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+254 715 881 328",
      href: "https://wa.me/254715881328",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/evansoduor",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/evansoduor",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com/evansoduor",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 p-4 md:p-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 active:bg-green-500/30 active:scale-95 transition-all duration-200 md:px-4 px-2 md:py-2 py-1.5"
          >
            <ArrowLeft className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Back</span>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-green-400">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 text-xl">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-black/20 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-black/20 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-black/20 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-black/20 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-500 text-black hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25 active:bg-green-600 active:scale-95 transition-all duration-200"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 hover:bg-green-500/10 transition-colors duration-300 group"
                  >
                    <div className="text-green-400 group-hover:text-green-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white group-hover:text-green-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 text-xl">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 border border-green-500/30 text-green-400 hover:text-green-300 hover:border-green-400 transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Follow me on social media for updates on my latest projects
                  and insights.
                </p>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 text-xl">
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">
                  I'm currently available for new projects and collaborations.
                </p>
                <p className="text-sm text-gray-400">
                  Response time: Usually within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-green-500/20 text-center"
        >
          <p className="text-sm text-gray-400">
            Designed for the future by{" "}
            <span className="text-green-400">Stakweb Limited</span>
          </p>
        </motion.footer>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default ContactPage;
