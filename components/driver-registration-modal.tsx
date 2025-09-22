"use client"
import { X } from "lucide-react"
import DriverRegistrationForm from "./driver-registration-form"

interface DriverRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DriverRegistrationModal({ isOpen, onClose }: DriverRegistrationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-gradient-to-br from-[#0B0E2A] via-[#14183d] to-[#1e275c] rounded-3xl border border-[#00D1FF]/20 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-[#E8EBFF] hover:text-[#00D1FF] transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal content */}
        <div className="overflow-y-auto max-h-[90vh]">
          <DriverRegistrationForm />
        </div>
      </div>
    </div>
  )
}
