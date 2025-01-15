import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
interface AccordionItemProps {
  title: string
  content: string
}

function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={`${isOpen ? 'border border-gray-200 rounded-lg' : ''}`}>
      <div className="flex items-center justify-between space-x-4 px-4 py-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-xl font-medium">{title}</h2>
        <button className="h-8 w-8 rounded-full flex items-center justify-center">
          {isOpen ? (
            <Minus className="h-6 w-6 text-blue-600" />
          ) : (
            <Plus className="h-6 w-6 text-blue-600" />
          )}
        </button>
      </div>
      <div 
        className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 pb-4">{content}</p>
      </div>
    </div>
  )
}

export default function SubscriptionAccordion() {
  const items = [
    {
      title: "Subscription Setup",
      content: "Our comprehensive guest tenant screening process enables you to verify the qualifications and responsibility of your guests, thereby minimizing the potential for property damage and noise disturbances."
    },
    {
      title: "Payment tracking",
      content: "Keep track of all your payments and transactions in one place. Monitor incoming rent payments, security deposits, and other financial transactions with ease."
    },
    {
      title: "Reminders",
      content: "Never miss important deadlines with our automated reminder system. Get notifications for rent collection, maintenance schedules, and lease renewals."
    }
  ]

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4  rounded-lg bg-white">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  )
}