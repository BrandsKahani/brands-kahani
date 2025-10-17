import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-600">Start a conversation about franchise opportunities or a brand project.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <form className="p-6 rounded-2xl border border-black/5">
          <label className="block text-sm">Name<input className="mt-2 w-full rounded-lg border px-4 py-2"/></label>
          <label className="block text-sm mt-4">Email<input className="mt-2 w-full rounded-lg border px-4 py-2"/></label>
          <label className="block text-sm mt-4">Message<textarea className="mt-2 w-full rounded-lg border px-4 py-2 h-32"/></label>
          <button className="mt-4 px-4 py-2 rounded-2xl bg-brand-red text-white">Send message</button>
        </form>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl border border-black/5">
            <div className="font-semibold">Email</div>
            <div className="text-sm text-gray-600">info@brandskahani.com</div>
          </div>

          <div className="p-6 rounded-2xl border border-black/5">
            <div className="font-semibold">Phone</div>
            <div className="text-sm text-gray-600">03041118000</div>
          </div>

          <div className="p-6 rounded-2xl border border-black/5">
            <div className="font-semibold">Address</div>
            <div className="text-sm text-gray-600">Office No. 106, 1st floor, Al-Hafeez Heights, Ghalib Road, Gulberg 3, Lahore</div>
          </div>
        </div>
      </div>
    </div>
  )
}
