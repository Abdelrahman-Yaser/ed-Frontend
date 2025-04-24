// app/account/page.tsx

import LoginPage from "./login/page";
import PersonalDataPage from "./profile/page";



function useAuth() {

  const isAuthenticated = false // change based on real auth state
  return { isAuthenticated };
}

export default function AccountPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container mx-auto mt-10">
      {isAuthenticated ? <PersonalDataPage /> : <LoginPage />}
    </div>
  );
}
