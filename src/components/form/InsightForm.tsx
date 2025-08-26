import { useSubscribe } from "@/hooks/useSubscribe";
import { useEffect, useState } from "react";
import ThankYouModal from "../modals/ThankYouModal";
import { cn } from "@/lib/utils";

export default function InsightReportForm({className}:{className?:string}) {
  const { subscribe, loading, setSuccess ,error, success } = useSubscribe();
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

interface InsightReportFormEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
    preventDefault(): void;
}

const handleSubmit = async (e: InsightReportFormEvent) => {
    e.preventDefault();
    await subscribe(fullName, companyName, email);
};
    useEffect(() => {
        if (success) {
            setFullName("")
            setEmail("")
            setCompanyName("")
        }
    },[success])

  return (
   
    //   <div className="w-full">
        <div className={cn("bg-white max-w-[576px] rounded-2xl shadow-lg border border-gray-200 p-8",className)}>
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Download Insight Report</h1>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Enter your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Getting Report..." : "Get Insight Report"}
            </button>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            
            {success && (
             <ThankYouModal isOpen={success} onClose={() =>setSuccess(false)} />
            )}
          </div>
        </div>
    //   </div>
   
  );
}