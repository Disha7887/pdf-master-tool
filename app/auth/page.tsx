
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthForm from './AuthForm';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
}
