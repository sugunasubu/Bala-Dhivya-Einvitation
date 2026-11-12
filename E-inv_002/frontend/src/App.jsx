import React, { useState, useEffect } from "react";
import Frame01Opening from "./components/frames/Frame01Opening";
import Frame02Hero from "./components/frames/Frame02Hero";
import Frame03Couple from "./components/frames/Frame03Couple";
import Frame04Events from "./components/frames/Frame04Events";
import Frame05Venue from "./components/frames/Frame05Venue";
import Frame06GuestGuide from "./components/frames/Frame06GuestGuide";
import Frame07ExploreMadurai from "./components/frames/Frame07ExploreMadurai";
import Frame08FamilyDetails from "./components/frames/Frame08FamilyDetails";
import InvitationLayout from "./components/layout/InvitationLayout";

export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);

  useEffect(() => {
    // Disable browser scroll restoration so refresh always starts at top (Frame 2)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always reset scroll to top on initial page load / refresh
    window.scrollTo(0, 0);

    // If an anchor hash points to a lower frame, reset URL so page doesn't jump
    if (window.location.hash && window.location.hash !== "#layer-frame-2") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    if (!isGateOpen) {
      document.body.classList.add("locked-gate");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("locked-gate");
      document.body.classList.add("invitation-open");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.getElementById("hero-title")?.focus({ preventScroll: true });
    }
  }, [isGateOpen]);

  const handleOpenInvitation = () => {
    setIsGateOpen(true);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      {/* Frame 01 - Opening Gate Overlay */}
      {!isGateOpen && <Frame01Opening onOpen={handleOpenInvitation} />}

      {/* Main Invitation Layout & Content Frames */}
      <InvitationLayout>
        <Frame02Hero isGateOpen={isGateOpen} />
        <Frame03Couple />
        <Frame04Events />
        <Frame05Venue />
        <Frame06GuestGuide />
        <Frame07ExploreMadurai />
        <Frame08FamilyDetails />
      </InvitationLayout>
    </>
  );
}

