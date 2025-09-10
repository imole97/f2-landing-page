import CohortApplicationForm from "@/components/launchpad/CohortApplicationForm";
import Container from "@/components/layout/Container";

export default function LaunchpadApplyPage() {
  return (
    <div className="min-h-screen bg-[#0D102F] py-40">
      <Container className="max-w-[1160px]">
        <div className="bg-[#F8F9FD] rounded-3xl p-6 md:p-10">
          <header className="mb-10">
            <h1 className="text-3xl leading-tight md:text-5xl font-medium text-[#040404] mb-4">
              F2 Venture LaunchPad Cohort Application
            </h1>
            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              Thank you for your interest in the F2 Venture LaunchPad. Please
              complete this short application to be considered for our next
              cohort.
            </p>
          </header>
          <CohortApplicationForm />
        </div>
      </Container>
    </div>
  );
}
