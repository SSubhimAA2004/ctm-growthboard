


import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  UserPlus,
  Users,
  Sparkles,
  Loader2,
  CheckCircle2,
  Zap,
} from "lucide-react";

import {
  registerUser,
  validateStoredSession,
} from "../services/api";

const Register = () => {
  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [checkingSession, setCheckingSession] =
    useState(true);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      sponsorBusinessId:
        "",
      referralBusinessId:
        "",
      state: "",
      district: "",
      village: "",
      pinCode: "",
      panNumber: "",
    });

  useEffect(() => {
    initializeSession();
  }, []);

  const initializeSession =
    async () => {
      try {
        const session =
          localStorage.getItem(
            "ctm_session"
          );

        if (!session) {
          setCheckingSession(
            false
          );
          return;
        }

        const parsed =
          JSON.parse(session);

        const validation =
          await validateStoredSession(
            parsed.sessionToken
          );

        if (
          validation?.success
        ) {
          navigate(
            "/dashboard"
          );
          return;
        }

        localStorage.removeItem(
          "ctm_session"
        );

        setCheckingSession(
          false
        );
      } catch (error) {
        localStorage.removeItem(
          "ctm_session"
        );

        setCheckingSession(
          false
        );
      }
    };

  const handleChange = (
    event
  ) => {
    const { name, value } =
      event.target;

    setFormData(
      (previous) => ({
        ...previous,
        [name]: value,
      })
    );
  };

  const validateForm = () => {
    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );

      return false;
    }

    if (
      formData.password
        .length < 6
    ) {
      setError(
        "Password must contain at least 6 characters"
      );

      return false;
    }

    if (
      !formData.sponsorBusinessId
    ) {
      setError(
        "Sponsor Business ID is required"
      );

      return false;
    }

    return true;
  };

  const handleSubmit =
    async (event) => {
      event.preventDefault();

      setError("");
      setSuccess("");

      const isValid =
        validateForm();

      if (!isValid) {
        return;
      }

      setLoading(true);

      try {
        const response =
          await registerUser({
            fullName:
              formData.fullName,
            email:
              formData.email,
            phoneNumber:
              formData.phoneNumber,
            password:
              formData.password,
            sponsorBusinessId:
              formData.sponsorBusinessId,
            referralBusinessId:
              formData.referralBusinessId,
            state:
              formData.state,
            district:
              formData.district,
            village:
              formData.village,
            pinCode:
              formData.pinCode,
            panNumber:
              formData.panNumber,
          });

        if (
          !response?.success
        ) {
          setError(
            response?.message ||
              "Registration failed"
          );

          setLoading(
            false
          );

          return;
        }

        setSuccess(
          `Business ID ${response?.data?.businessId} activated successfully`
        );

        localStorage.setItem(
          "ctm_session",
          JSON.stringify({
            sessionToken:
              response.data
                .sessionToken,

            expiresAt:
              response.data
                .expiresAt,

            user:
              response.data
                .user,
          })
        );

        setTimeout(() => {
          navigate(
            "/dashboard"
          );
        }, 1800);
      } catch (error) {
        setError(
          "Unable to connect to CTM servers"
        );
      } finally {
        setLoading(false);
      }
    };

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.45)]">
            <Zap
              size={42}
              className="text-white"
            />
          </div>

          <div className="flex items-center gap-3 text-white">
            <Loader2 className="animate-spin" />

            <span className="text-lg font-medium tracking-wide">
              Initializing CTM
              GrowthBoard
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_30%)]" />

      <div className="relative z-10 min-h-screen grid xl:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden xl:flex flex-col justify-between border-r border-white/5 px-14 py-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Momentum Network
              </span>
            </div>

            <div className="mt-16 max-w-[620px]">
              <h1 className="text-[84px] font-black leading-[0.9] tracking-[-4px] text-white">
                Join The
                <br />
                CTM Tribe
              </h1>

              <p className="mt-8 max-w-[580px] text-[22px] leading-[1.8] text-white/70">
                Build Tribes.
                Multiply
                Manpower.
                Unlock Money
                Power.
              </p>

              <p className="mt-6 max-w-[620px] text-lg leading-[1.9] text-white/45">
                Register your
                Business ID,
                activate execution
                momentum, and
                begin structured
                duplication inside
                the CTM Human
                Momentum
                Operating System.
              </p>
            </div>

            <div className="mt-16 grid gap-5">
              <div className="rounded-[28px] border border-white/6 bg-[rgba(7,15,35,0.72)] p-7 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-blue-500/15">
                    <UserPlus className="text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Sequential
                      Business IDs
                    </h3>

                    <p className="mt-2 leading-relaxed text-white/55">
                      Every member
                      receives a
                      globally unique
                      six-digit CTM
                      Business ID.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/6 bg-[rgba(7,15,35,0.72)] p-7 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-green-500/15">
                    <Users className="text-green-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Tribe
                      Duplication
                    </h3>

                    <p className="mt-2 leading-relaxed text-white/55">
                      Balanced left
                      and right tribe
                      growth drives
                      predictable pair
                      acceleration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/6 bg-[rgba(7,15,35,0.72)] p-7 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-pink-500/15">
                    <Sparkles className="text-pink-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Leadership
                      Evolution
                    </h3>

                    <p className="mt-2 leading-relaxed text-white/55">
                      Consistent
                      execution
                      transforms
                      builders into
                      long-term tribe
                      leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/6 pt-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/35">
                System Status
              </p>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                <span className="font-medium text-white/80">
                  Live Momentum
                  Active
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm uppercase tracking-[0.24em] text-white/35">
                Execution Layer
              </p>

              <p className="mt-3 font-medium text-white/80">
                Secure Onboarding
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-[880px] rounded-[36px] border border-white/6 bg-[rgba(7,15,35,0.72)] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-[24px] sm:p-10 lg:p-12">
            <div className="xl:hidden mb-10 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 shadow-[0_0_60px_rgba(59,130,246,0.45)]">
                <Zap
                  size={36}
                  className="text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
                  CTM Onboarding
                </p>

                <h2 className="mt-5 text-[54px] font-black leading-[0.95] tracking-[-3px] text-white sm:text-[64px]">
                  Activate Your
                  Momentum
                </h2>

                <p className="mt-6 max-w-[620px] text-lg leading-[1.8] text-white/60">
                  Create your
                  secure execution
                  account and enter
                  the CTM Growth
                  acceleration
                  system.
                </p>
              </div>

              <div className="rounded-[22px] border border-blue-500/20 bg-blue-500/10 px-5 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-blue-300">
                  Network Rule
                </p>

                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Sponsor Business
                  ID controls binary
                  placement and
                  tribe structure.
                </p>
              </div>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="mt-12"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={
                      formData.fullName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter your full name"
                    required
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter email address"
                    required
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={
                      formData.phoneNumber
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter phone number"
                    required
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Sponsor Business
                    ID
                  </label>

                  <input
                    type="text"
                    name="sponsorBusinessId"
                    value={
                      formData.sponsorBusinessId
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="100001"
                    required
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Referral Business
                    ID
                  </label>

                  <input
                    type="text"
                    name="referralBusinessId"
                    value={
                      formData.referralBusinessId
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Optional"
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={
                      formData.password
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Create password"
                    required
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={
                      formData.confirmPassword
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Confirm password"
                    required
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={
                      formData.state
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter state"
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    District
                  </label>

                  <input
                    type="text"
                    name="district"
                    value={
                      formData.district
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter district"
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    Village
                  </label>

                  <input
                    type="text"
                    name="village"
                    value={
                      formData.village
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter village"
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    PIN Code
                  </label>

                  <input
                    type="text"
                    name="pinCode"
                    value={
                      formData.pinCode
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter PIN code"
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    PAN Number
                  </label>

                  <input
                    type="text"
                    name="panNumber"
                    value={
                      formData.panNumber
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter PAN number"
                    className="h-[72px] w-full rounded-[22px] border border-white/8 bg-white/[0.03] px-6 text-lg text-white uppercase outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-7 rounded-[20px] border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm leading-relaxed text-red-300">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-7 flex items-center gap-3 rounded-[20px] border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm leading-relaxed text-green-300">
                  <CheckCircle2 />

                  <span>
                    {success}
                  </span>
                </div>
              )}

              <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <button
                  type="submit"
                  disabled={
                    loading
                  }
                  className="group flex h-[74px] items-center justify-center gap-3 rounded-[24px] bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 px-10 text-lg font-bold tracking-wide text-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_50px_rgba(59,130,246,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />

                      Activating
                      Momentum
                    </>
                  ) : (
                    <>
                      Activate
                      Business ID

                      <ArrowRight
                        size={22}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 text-white/60">
                  <ShieldCheck className="text-green-400" />

                  <span className="text-sm leading-relaxed">
                    Protected by
                    session validation
                    and password
                    hashing
                  </span>
                </div>
              </div>

              <div className="mt-10 border-t border-white/6 pt-8 text-center">
                <p className="text-white/50">
                  Already have an
                  active CTM
                  account?
                </p>

                <Link
                  to="/login"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  Return to Login

                  <ArrowRight
                    size={18}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


