import Navbar from '@/components/Navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar /> {/* Include shared UI here e.g. a header or sidebar or navbar */}
      <p>shared by dashboard layout</p>
      {children}
    </>
  )
}