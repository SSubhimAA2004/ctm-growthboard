

// FILE: src/services/api.js

const API_BASE_URL =
  "https://script.google.com/macros/s/AKfycbwK6UGaiQvYBxZtNFa-oS3X5wz7ESsYwRqxlb7BU7c677dnMU7jzKvk1GGRD5o1j8Gl/exec";

/**
 * Generic API Request Handler
 */
async function request(action, payload = {}) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action,
        ...payload,
      }),
    });

    // Handle non-200 responses
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API ERROR:", error);

    return {
      success: false,
      message: error.message || "Unknown API Error",
    };
  }
}

/**
 * Authentication APIs
 */

export async function loginUser(credentials) {
  return request("loginUser", credentials);
}

export async function registerUser(payload) {
  return request("registerUser", payload);
}

export async function validateStoredSession(session) {
  return request("validateStoredSession", session);
}

/**
 * Dashboard APIs
 */

export async function loadDashboard(payload) {
  return request("loadDashboard", payload);
}

/**
 * Prospect APIs
 */

export async function createProspect(payload) {
  return request("createProspect", payload);
}

export async function updateProspect(payload) {
  return request("updateProspect", payload);
}

export async function getProspects(payload) {
  return request("getProspects", payload);
}

/**
 * Follow-Up APIs
 */

export async function createFollowUp(payload) {
  return request("createFollowUp", payload);
}

export async function getFollowUps(payload) {
  return request("getFollowUps", payload);
}

/**
 * Team APIs
 */

export async function getTeamMembers(payload) {
  return request("getTeamMembers", payload);
}

export async function getLeaderboard(payload) {
  return request("getLeaderboard", payload);
}

/**
 * Rank & Income APIs
 */

export async function getRankData(payload) {
  return request("getRankData", payload);
}

export async function getIncomeData(payload) {
  return request("getIncomeData", payload);
}

/**
 * Notifications APIs
 */

export async function getNotifications(payload) {
  return request("getNotifications", payload);
}

/**
 * Default Export
 */

export default request;

