


import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  validateStoredSession,
} from "./services/api";

function ProtectedRoute({
  children,
}) {
  const [loading, setLoading] =
    useState(true);

  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {
    validateAccess();
  }, []);

  const validateAccess =
    async () => {
      try {
        const storedSession =
          localStorage.getItem(
            "ctm_session"
          );

        if (!storedSession) {
          setAuthorized(
            false
          );

          setLoading(false);

          return;
        }

        const parsedSession =
          JSON.parse(
            storedSession
          );

        const expiresAt =
          new Date(
            parsedSession.expiresAt
          );

        const now =
          new Date();

        if (
          now > expiresAt
        ) {
          localStorage.removeItem(
            "ctm_session"
          );

          setAuthorized(
            false
          );

          setLoading(false);

          return;
        }

        const validation =
          await validateStoredSession(
            parsedSession.sessionToken
          );

        if (
          validation?.success
        ) {
          setAuthorized(
            true
          );
        } else {
          localStorage.removeItem(
            "ctm_session"
          );

          setAuthorized(
            false
          );
        }
      } catch (error) {
        localStorage.removeItem(
          "ctm_session"
        );

        setAuthorized(
          false
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_30%)]" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-28 h-28 rounded-[32px] bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.45)]">
            <div className="text-white text-[42px] font-black tracking-[-2px]">
              CTM
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-[44px] leading-none tracking-[-2px] font-black text-white">
              GrowthBoard
            </h1>

            <p className="mt-5 text-white/60 text-lg tracking-wide">
              Validating Secure
              Execution Access
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse delay-150" />

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse delay-300" />
          </div>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}

function PublicRoute({
  children,
}) {
  const [checking, setChecking] =
    useState(true);

  const [authenticated, setAuthenticated] =
    useState(false);

  useEffect(() => {
    validatePublicAccess();
  }, []);

  const validatePublicAccess =
    async () => {
      try {
        const storedSession =
          localStorage.getItem(
            "ctm_session"
          );

        if (!storedSession) {
          setChecking(false);
          return;
        }

        const parsedSession =
          JSON.parse(
            storedSession
          );

        const expiresAt =
          new Date(
            parsedSession.expiresAt
          );

        if (
          new Date() >
          expiresAt
        ) {
          localStorage.removeItem(
            "ctm_session"
          );

          setChecking(false);

          return;
        }

        const validation =
          await validateStoredSession(
            parsedSession.sessionToken
          );

        if (
          validation?.success
        ) {
          setAuthenticated(
            true
          );
        } else {
          localStorage.removeItem(
            "ctm_session"
          );
        }
      } catch (error) {
        localStorage.removeItem(
          "ctm_session"
        );
      } finally {
        setChecking(false);
      }
    };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.45)]">
            <div className="text-white text-[36px] font-black">
              CTM
            </div>
          </div>

          <div className="text-white/75 text-lg tracking-wide">
            Initializing
            Execution System
          </div>
        </div>
      </div>
    );
  }

  if (authenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


