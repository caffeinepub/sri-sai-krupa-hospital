import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const { login, loginStatus } = useInternetIdentity();
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateLogin = () => {
    const e: Record<string, string> = {};
    if (!loginForm.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(loginForm.email)) e.email = "Invalid email";
    if (!loginForm.password) e.password = "Password is required";
    return e;
  };

  const validateSignup = () => {
    const e: Record<string, string> = {};
    if (!signupForm.name) e.name = "Name is required";
    if (!signupForm.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signupForm.email)) e.email = "Invalid email";
    if (!signupForm.password || signupForm.password.length < 6)
      e.password = "Password must be at least 6 characters";
    return e;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateLogin();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    login();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateSignup();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    login();
  };

  const isLoggingIn = loginStatus === "logging-in";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 overlay-backdrop"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
        data-ocid="login.modal"
      />
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-2xl shadow-modal w-full max-w-[420px] overflow-hidden modal-pop-in"
          data-ocid="login.dialog"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <div>
              <h2 className="text-xl font-bold text-foreground">Welcome</h2>
              <p className="text-sm text-muted-foreground">
                Sign in to your FreshBasket account
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
              data-ocid="login.close_button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <Tabs defaultValue="login" className="px-6 pb-6">
            <TabsList className="w-full mt-4 mb-5">
              <TabsTrigger
                value="login"
                className="flex-1"
                data-ocid="login.tab"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="flex-1"
                data-ocid="login.tab"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className={errors.email ? "border-red-400" : ""}
                    data-ocid="login.input"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="login.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm((p) => ({
                          ...p,
                          password: e.target.value,
                        }))
                      }
                      className={
                        errors.password ? "border-red-400 pr-10" : "pr-10"
                      }
                      data-ocid="login.input"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="login.error_state"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-semibold py-2.5 rounded-xl"
                  data-ocid="login.submit_button"
                >
                  {isLoggingIn
                    ? "Connecting..."
                    : "Login with Internet Identity"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={signupForm.name}
                    onChange={(e) =>
                      setSignupForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className={errors.name ? "border-red-400" : ""}
                    data-ocid="login.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="login.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className={errors.email ? "border-red-400" : ""}
                    data-ocid="login.input"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="login.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Min. 6 characters"
                      value={signupForm.password}
                      onChange={(e) =>
                        setSignupForm((p) => ({
                          ...p,
                          password: e.target.value,
                        }))
                      }
                      className={
                        errors.password ? "border-red-400 pr-10" : "pr-10"
                      }
                      data-ocid="login.input"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="login.error_state"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-semibold py-2.5 rounded-xl"
                  data-ocid="login.submit_button"
                >
                  {isLoggingIn ? "Connecting..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
