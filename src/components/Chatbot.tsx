import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, X, Send, Phone, HardHat } from "lucide-react";

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    type?: 'text' | 'whatsapp-cta';
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Merhaba! Ben Archis Proje Asistanıyım. Mimari tasarım, iç mekan projeleri veya danışmanlık hizmetlerimiz hakkında size nasıl yardımcı olabilirim?",
            isUser: false
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [interactionCount, setInteractionCount] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true);
        }, 4500);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const newMessage = {
            id: messages.length + 1,
            text: inputValue,
            isUser: true
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true);
        setInteractionCount(prev => prev + 1);

        // Simulate bot delay and logic
        setTimeout(() => {
            let botResponse: Message;

            if (interactionCount === 0) {
                botResponse = {
                    id: messages.length + 2,
                    text: "Projenizle ilgili vizyonunuzu duymak harika. Size özel tasarım çözümleri sunabilmemiz ve proje detaylarını görüşebilmemiz için bir toplantı planlayalım mı?",
                    isUser: false
                };
                setIsTyping(false);
                setMessages(prev => [...prev, botResponse]);
            } else {
                // After 2nd message, redirect to WhatsApp
                setIsTyping(false);
                setMessages(prev => [
                    ...prev,
                    {
                        id: messages.length + 2,
                        text: "Doğrudan baş mimarımızla görüşmek ve randevu oluşturmak için WhatsApp hattımıza geçiş yapmanız en hızlı yol olacaktır.",
                        isUser: false
                    },
                    {
                        id: messages.length + 3,
                        text: "Aşağıdaki butona tıklayarak proje detaylarını WhatsApp üzerinden konuşabiliriz.",
                        isUser: false,
                        type: 'whatsapp-cta'
                    }
                ]);
            }
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
            {/* Chat Window */}
            {isOpen && (
                <Card className="mb-4 w-[350px] h-[500px] flex flex-col shadow-2xl border border-primary/10 animate-fade-in-up origin-bottom-right overflow-hidden bg-white/95 backdrop-blur-md rounded-xl">
                    {/* Header */}
                    <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-2.5 h-2.5 bg-accent rounded-full absolute bottom-0 right-0 border-2 border-primary shadow-sm z-10"></div>
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                                    <HardHat className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-sm tracking-widest uppercase">Mimar Asistanı</h3>
                                <p className="text-[10px] opacity-70 font-light tracking-wide">PROJE DESTEK</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/10 h-8 w-8 rounded-full transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${msg.isUser
                                        ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm'
                                        : 'bg-white text-foreground border border-border rounded-2xl rounded-tl-sm'
                                        }`}
                                >
                                    {msg.text}

                                    {msg.type === 'whatsapp-cta' && (
                                        <div className="mt-4 pt-4 border-t border-border/50">
                                            <Button
                                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-none rounded-lg transition-all hover:translate-x-1 font-medium tracking-wide"
                                                onClick={() => window.open('https://wa.me/905555555555', '_blank')}
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                WHATSAPP İLE GÖRÜŞ
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white shadow-sm border border-border p-4 rounded-2xl rounded-tl-sm">
                                    <div className="flex gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-primary/40 animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-primary/40 animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-primary/40 animate-bounce [animation-delay:-0.3s]"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-border">
                        <form
                            onSubmit={handleSendMessage}
                            className="flex gap-2"
                        >
                            <Input
                                placeholder="Mesajınızı yazın..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={messages.some(m => m.type === 'whatsapp-cta')}
                                className="flex-1 bg-muted/30 border-border focus-visible:ring-primary rounded-lg"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={!inputValue.trim() || messages.some(m => m.type === 'whatsapp-cta')}
                                className="bg-primary text-white hover:bg-black rounded-lg w-10 h-10 transition-transform active:scale-95"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </Card>
            )}

            {/* Notification Tooltip */}
            {!isOpen && showTooltip && (
                <div
                    className="absolute bottom-24 right-0 bg-primary text-primary-foreground px-5 py-4 shadow-xl border border-white/10 animate-fade-in-up cursor-pointer flex items-center whitespace-nowrap z-40 hover:-translate-x-1 transition-transform max-w-[300px] rounded-xl"
                    onClick={() => {
                        setIsOpen(true);
                        setShowTooltip(false);
                    }}
                >
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 border border-white/20 rounded-full">
                        <HardHat className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-display font-medium text-white mb-0.5 tracking-wide uppercase">Proje Teklifi?</p>
                        <p className="text-xs text-white/60">Hayalinizdeki yapıyı tasarlayalım.</p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowTooltip(false);
                        }}
                        className="absolute -top-2 -right-2 bg-white text-primary w-6 h-6 flex items-center justify-center shadow-md hover:bg-accent hover:text-white transition-colors rounded-full"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </div>
            )}

            {/* Main Toggle Button */}
            <div className="relative group">
                {/* Ping Effect - Square for architecture */}
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full bg-primary opacity-10 animate-ping duration-[3000ms] rounded-full"></span>
                )}

                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="lg"
                    className={`w-16 h-16 shadow-2xl relative z-10 transition-all duration-500 rounded-full ${isOpen
                        ? 'bg-white text-primary hover:bg-muted rotate-90 border-2 border-primary'
                        : 'bg-primary text-white hover:bg-black hover:-translate-y-1'
                        }`}
                >
                    {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}

                    {/* Status Square */}
                    {!isOpen && (
                        <span className="absolute top-0 right-0 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75 rounded-full"></span>
                            <span className="relative inline-flex h-3 w-3 bg-accent rounded-full"></span>
                        </span>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Chatbot;
