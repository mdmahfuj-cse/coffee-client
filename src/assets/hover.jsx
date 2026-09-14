import React from "react";
import {
  ArrowRight,
  BookOpen,
  Box,
  Database,
  FileCode2,
  Layers3,
  Map,
  Pencil,
  Route,
  Settings2,
} from "lucide-react";

interface GuideRow {
  name: string;
  location: string;
  purpose: string;
  editWhen: string;
}

const pageRows: GuideRow[] = [
  {
    name: "Home",
    location: "src/pages/HomePage.tsx",
    purpose:
      "Landing page, hero search, trust stats, quick actions, popular doctors, and health tips.",
    editWhen: "Change the main home page section or its layout.",
  },
  {
    name: "Doctor search",
    location: "src/pages/SearchPage.tsx + src/components/search/",
    purpose: "Search results, filters, sorting, pagination, and doctor cards.",
    editWhen:
      "Change search behavior in SearchPage; change a result card in DoctorCard.tsx.",
  },
  {
    name: "Doctor profile",
    location: "src/pages/DoctorProfilePage.tsx + src/components/doctor/",
    purpose:
      "Doctor information, reviews, clinic location, overview, and booking sidebar.",
    editWhen: "Change one profile section in the matching component folder.",
  },
  {
    name: "Booking",
    location: "src/pages/BookingPage.tsx + src/components/booking/",
    purpose:
      "The four-step date, patient, review/payment, and confirmation journey.",
    editWhen:
      "Change a step in Step1DateTime.tsx through Step4Confirmation.tsx.",
  },
  {
    name: "Appointments",
    location: "src/pages/AppointmentsPage.tsx + src/components/appointments/",
    purpose:
      "Upcoming, past, cancelled, detail, cancel, reschedule, waitlist, and review flows.",
    editWhen:
      "Change the page in AppointmentsPage; change a modal or card in appointments/.",
  },
  {
    name: "Prescriptions",
    location: "src/pages/PrescriptionsPage.tsx + src/components/prescriptions/",
    purpose:
      "Prescription details, medicine schedule tracking, and pharmacy orders.",
    editWhen:
      "Change prescription display in PrescriptionCard.tsx or its related modal.",
  },
  {
    name: "Emergency",
    location: "src/pages/EmergencyPage.tsx + src/stores/useEmergencyStore.ts",
    purpose:
      "Ambulance, blood donors, hospital ICU information, and emergency support.",
    editWhen:
      "Change emergency UI in EmergencyPage; change behavior/data state in the store.",
  },
  {
    name: "Health services",
    location:
      "src/pages/HealthRecordsPage.tsx, LabTestsPage.tsx, ChamberQueueTrackerPage.tsx, InsuranceClaimsPage.tsx",
    purpose:
      "Health records, diagnostics, chamber queues, and insurance workflows.",
    editWhen:
      "Edit the page named after the service; inspect its matching store for behavior.",
  },
  {
    name: "Family profiles",
    location:
      "src/pages/FamilyProfilesPage.tsx + src/stores/useFamilyProfilesStore.ts",
    purpose:
      "Self and dependant profiles, active patient selection, and health details.",
    editWhen:
      "Change profile screens in the page; change saved profile behavior in the store.",
  },
  {
    name: "Telehealth",
    location: "src/components/telehealth/TelehealthRoom.tsx",
    purpose: "The consultation room shown for a telehealth appointment.",
    editWhen: "Change the consultation room UI or call controls.",
  },
];

const componentRows: GuideRow[] = [
  {
    name: "App shell",
    location: "src/components/layout/AppLayout.tsx",
    purpose: "Persistent navbar, page region, footer, and toast container.",
    editWhen: "Change the global page frame.",
  },
  {
    name: "Navbar",
    location: "src/components/layout/Navbar.tsx",
    purpose:
      "Branding, desktop/mobile navigation, services, patient switcher, and booking CTA.",
    editWhen: "Change navigation links, menus, or the patient switcher.",
  },
  {
    name: "Footer",
    location: "src/components/layout/Footer.tsx",
    purpose: "Global links, service information, and emergency notice.",
    editWhen: "Change footer content or footer navigation.",
  },
  {
    name: "Buttons and inputs",
    location: "src/components/ui/Button.tsx, Input.tsx, Badge.tsx, Dialog.tsx",
    purpose: "Reusable interface primitives shared across feature pages.",
    editWhen:
      "Change a shared control appearance or behavior; check all pages after editing.",
  },
  {
    name: "Home feature sections",
    location: "src/components/home/",
    purpose: "Quick actions and health tips used by HomePage.",
    editWhen: "Change a home section without editing the full page.",
  },
];

const homeOrderRows: GuideRow[] = [
  {
    name: "1. Hero and search",
    location: "src/pages/HomePage.tsx",
    purpose:
      "The large opening area: headline, search form, popular filters, trust stats, and service shortcut grids.",
    editWhen:
      "Change the top of Home. Move the whole first <section> block to change its position.",
  },
  {
    name: "2. Daily health tips",
    location: "src/components/home/HealthTipsCarousel.tsx",
    purpose: "Health education carousel rendered immediately after the hero.",
    editWhen:
      "Move the <HealthTipsCarousel /> line in HomePage.tsx to place it earlier or later.",
  },
  {
    name: "3. Quick actions",
    location: "src/components/home/QuickActionsSection.tsx",
    purpose:
      "Book appointment, prescriptions, and emergency shortcuts rendered after health tips.",
    editWhen:
      "Move the <QuickActionsSection /> line in HomePage.tsx to change its position.",
  },
  {
    name: "4. Specialties",
    location: "src/pages/HomePage.tsx",
    purpose: "Popular medical specialty cards and specialty search links.",
    editWhen:
      "Find the section marked SPECIALTIES SECTION and move that entire block.",
  },
  {
    name: "5. Popular doctors",
    location: "src/pages/HomePage.tsx + src/data/mockDoctors.ts",
    purpose:
      "Featured doctor cards using the first four entries from MOCK_DOCTORS.",
    editWhen:
      "Change layout in HomePage; change doctor content in mockDoctors.ts.",
  },
  {
    name: "6. Patient reviews",
    location: "src/pages/HomePage.tsx + src/data/mockDoctors.ts",
    purpose: "Patient review and trust content shown lower on the home page.",
    editWhen:
      "Find the reviews section in HomePage.tsx and move the complete section.",
  },
  {
    name: "7. Clinics and final CTA",
    location: "src/pages/HomePage.tsx",
    purpose: "Clinic information and the closing booking call to action.",
    editWhen: "Move the final home sections near the bottom of HomePage.tsx.",
  },
];

const storeRows: GuideRow[] = [
  {
    name: "Routes and UI",
    location: "src/stores/useUIStore.ts",
    purpose:
      "Current route, browser history, timezone, mobile menu, toasts, and saved doctors.",
    editWhen: "Change navigation or global UI state.",
  },
  {
    name: "Search",
    location: "src/stores/useSearchStore.ts",
    purpose: "Search fields, filters, sorting, and pagination.",
    editWhen: "Change filter values or search state behavior.",
  },
  {
    name: "Booking",
    location: "src/stores/useBookingStore.ts",
    purpose:
      "Selected doctor, date, slot, patient details, promo, step, and confirmation.",
    editWhen: "Change booking rules or step data.",
  },
  {
    name: "Appointments",
    location: "src/stores/useAppointmentStore.ts",
    purpose: "Create, cancel, reschedule, retrieve, and persist appointments.",
    editWhen: "Change appointment lifecycle behavior or storage.",
  },
  {
    name: "Prescriptions",
    location: "src/stores/usePrescriptionStore.ts",
    purpose: "Prescription data, medication intake, and pharmacy orders.",
    editWhen: "Change medication or order behavior.",
  },
  {
    name: "Other domains",
    location: "src/stores/useChamberQueueStore.ts and related stores",
    purpose:
      "Queue, records, insurance, lab tests, waitlist, family, and emergency state.",
    editWhen: "Find the store whose name matches the domain you are changing.",
  },
];

const dataRows: GuideRow[] = [
  {
    name: "Doctors and clinics",
    location: "src/data/mockDoctors.ts",
    purpose:
      "Mock doctors, reviews, specialties, clinic details, and schedules.",
    editWhen: "Change demo doctor information or available specialties.",
  },
  {
    name: "Prescriptions",
    location: "src/data/mockPrescriptions.ts",
    purpose: "Initial prescription and medicine demonstration data.",
    editWhen: "Change the initial prescription examples.",
  },
  {
    name: "Domain types",
    location: "src/types/index.ts, healthRecords.ts, phase10.ts",
    purpose:
      "Shared TypeScript contracts for routes, doctors, appointments, patients, and services.",
    editWhen:
      "Add or change the shape of data passed between stores and components.",
  },
  {
    name: "Scheduling helpers",
    location: "src/utils/calendarUtils.ts and scheduleUtils.ts",
    purpose: "Calendar calculations, dates, slots, and availability logic.",
    editWhen: "Change date or time slot calculations.",
  },
];

function GuideTable({ rows }: { rows: GuideRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#AFC8CC] bg-white">
      <div className="hidden grid-cols-[1fr_1.25fr_1.5fr_1.5fr] gap-4 border-b border-[#D7E6E8] bg-[#EAF5F6] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#37616A] md:grid">
        <span>Area</span>
        <span>Location</span>
        <span>What it controls</span>
        <span>Edit this when...</span>
      </div>
      <div className="divide-y divide-[#D7E6E8]">
        {rows.map((row) => (
          <div
            key={row.name}
            className="grid gap-2 px-5 py-4 md:grid-cols-[1fr_1.25fr_1.5fr_1.5fr] md:gap-4"
          >
            <strong className="text-sm text-[#143B43]">{row.name}</strong>
            <code className="break-words text-xs font-bold text-[#168292]">
              {row.location}
            </code>
            <p className="text-sm leading-relaxed text-[#37616A]">
              {row.purpose}
            </p>
            <p className="text-sm leading-relaxed text-[#37616A]">
              {row.editWhen}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuideSection({
  icon: Icon,
  title,
  description,
  rows,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  rows: GuideRow[];
}) {
  return (
    <section
      className="space-y-4"
      aria-labelledby={`${title.toLowerCase().replaceAll(" ", "-")}-heading`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#CDECEF] text-[#126675]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2
            id={`${title.toLowerCase().replaceAll(" ", "-")}-heading`}
            className="text-xl font-bold text-[#143B43]"
          >
            {title}
          </h2>
          <p className="mt-1 text-sm text-[#37616A]">{description}</p>
        </div>
      </div>
      <GuideTable rows={rows} />
    </section>
  );
}

export function ComponentGuidePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <header className="max-w-3xl border-l-4 border-[#168292] pl-5">
        <div className="flex items-center gap-2 text-sm font-bold text-[#168292]">
          <BookOpen className="h-4 w-4" /> Developer reference
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#143B43] sm:text-5xl">
          Find the right file before you edit
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#37616A]">
          This page maps every major MediBook screen to its page, feature
          component, store, data source, and safest edit point. Start with the
          visible area you want to change, then follow the file path in the
          table.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[#AFC8CC] bg-white p-5">
          <Route className="h-5 w-5 text-[#168292]" />
          <h2 className="mt-3 font-bold text-[#143B43]">Page first</h2>
          <p className="mt-1 text-sm text-[#37616A]">
            Full-screen workflow and route composition lives in `src/pages/`.
          </p>
        </div>
        <div className="rounded-lg border border-[#AFC8CC] bg-white p-5">
          <Layers3 className="h-5 w-5 text-[#168292]" />
          <h2 className="mt-3 font-bold text-[#143B43]">Component second</h2>
          <p className="mt-1 text-sm text-[#37616A]">
            A reusable section usually lives in the matching `src/components/`
            domain folder.
          </p>
        </div>
        <div className="rounded-lg border border-[#AFC8CC] bg-white p-5">
          <Settings2 className="h-5 w-5 text-[#168292]" />
          <h2 className="mt-3 font-bold text-[#143B43]">Store for behavior</h2>
          <p className="mt-1 text-sm text-[#37616A]">
            State, actions, persistence, and business rules live in
            `src/stores/`.
          </p>
        </div>
      </div>

      <GuideSection
        icon={Map}
        title="Pages and visible sections"
        description="Use this table when you know which screen or workflow you want to change."
        rows={pageRows}
      />
      <GuideSection
        icon={Route}
        title="Home page order and positioning"
        description="Home sections are rendered from top to bottom inside HomePage.tsx. To reposition a component, move its JSX line or its complete section block in that file."
        rows={homeOrderRows}
      />
      <GuideSection
        icon={Box}
        title="Shared and feature components"
        description="Use these files for reusable UI sections. Changes here can affect multiple pages."
        rows={componentRows}
      />
      <GuideSection
        icon={Database}
        title="State and behavior"
        description="Use stores when the change affects navigation, saved data, filters, booking rules, or actions."
        rows={storeRows}
      />
      <GuideSection
        icon={FileCode2}
        title="Data, types, and utilities"
        description="Use these files when the content model or date and schedule calculations need to change."
        rows={dataRows}
      />

      <section className="rounded-lg border border-[#AFC8CC] bg-[#143B43] p-6 text-white sm:p-8">
        <div className="flex items-center gap-3">
          <Pencil className="h-5 w-5 text-[#67B7C1]" />
          <h2 className="text-xl font-bold">A simple change workflow</h2>
        </div>
        <ol className="mt-5 grid gap-4 text-sm leading-relaxed text-[#DDF4F5] md:grid-cols-3">
          <li>
            <strong className="block text-white">1. Find the route</strong>Check
            `src/App.tsx` to see which page renders the screen.
          </li>
          <li>
            <strong className="block text-white">2. Find the owner</strong>Open
            the matching page or feature component listed above.
          </li>
          <li>
            <strong className="block text-white">3. Check behavior</strong>If
            the change involves data or actions, update the matching Zustand
            store and types.
          </li>
        </ol>
        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#67B7C1]">
          After editing, run `npm run lint` and `npm run build`{" "}
          <ArrowRight className="h-4 w-4" />
        </div>
      </section>
    </div>
  );
}
