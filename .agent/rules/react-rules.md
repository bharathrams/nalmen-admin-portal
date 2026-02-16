---
trigger: always_on
---

(JavaScript + React Router DOM + TanStack Query + React Hook Form + Yup)

---

## 1. Stack Enforcement

- React (Functional Components Only)
- JavaScript (ES2022+)
- React Router DOM (v6+)
- TanStack React Query (Server State Management)
- React Hook Form (Primary Form Library)
- Formik (Allowed only for complex legacy forms)
- Yup (Schema Validation)
- Tailwind CSS (Styling)
- Framer Motion (All transitions & micro-interactions)

Class components are strictly prohibited.

---

## 2. Architecture & Folder Structure

Feature-based architecture is mandatory.

src/
app/
features/
featureName/
components/
hooks/
services/
validation/
utils/
shared/
components/
hooks/
utils/
lib/
styles/

yaml
Copy code

Rules:
- One component per file.
- UI logic in components only.
- Business logic in hooks.
- API calls in services.
- Validation schemas in `/validation`.
- Shared reusable code in `/shared`.

---

## 3. Component Design Rules

- Single Responsibility Principle enforced.
- Components should not exceed 200 lines (soft limit).
- No nested ternaries.
- Avoid deeply nested JSX.
- Extract reusable logic immediately.
- Prefer composition over prop drilling.

---

## 4. API & Server State Governance (TanStack Query)

Mandatory:
- No `useEffect` data fetching.
- No direct `fetch` or `axios` inside components.
- All API logic must exist inside `/services`.
- All server state must be managed via React Query.

Query Rules:
- Every API must have a dedicated custom hook.
- Query keys must follow array format: `['resource', id]`
- Use `select` for response transformation.
- Configure `staleTime` intentionally.
- Avoid unnecessary `refetchOnWindowFocus`.

Mutation Rules:
- Use `useMutation` for all write operations.
- Invalidate related queries after mutation.
- Use optimistic updates where required.
- Implement rollback handling.

Every query must handle:
- Loading state
- Error state
- Empty state

---

## 5. Routing Governance (React Router DOM)

- Use nested routes for feature isolation.
- Use layout routes for shared UI sections.
- Lazy-load route components.
- Protected routes must use wrapper components.
- Validate route params before usage.
- No business logic inside route definitions.

---

## 6. Form Governance

React Hook Form is the default standard.

Rules:
- Use `useForm` for all new forms.
- Use `Controller` only for controlled UI components.
- Do not manually manage form state.
- Avoid unnecessary re-renders.

Validation:
- All forms must use Yup schemas.
- Validation logic must not live inside components.
- Schema files must exist inside `/validation`.

Formik:
- Allowed only for complex multi-step or legacy forms.
- Otherwise prohibited.

---

## 7. State Management Rules

- Keep state as local as possible.
- Do not duplicate derived state.
- Never mutate state directly.
- Use functional updates when depending on previous state.
- Complex logic must move into custom hooks.

---

## 8. Performance Standards

- Prevent unnecessary re-renders.
- Avoid inline object/array creation in JSX.
- Memoize only when measurable benefit exists.
- Use dynamic imports for heavy components.
- Lists must use stable unique keys (never array index for dynamic data).
- Avoid O(n²) rendering patterns.

---

## 9. Error Handling & Resilience

- All async operations wrapped in try/catch.
- Errors normalized at service layer.
- Display domain-specific error messages.
- Feature-level Error Boundaries required.
- No console.log in production-ready code.

---

## 10. Security Standards

- No hardcoded secrets.
- Validate all form inputs using Yup.
- Sanitize user-generated content.
- Never trust route parameters without validation.
- Centralized handling for 401/403 responses.
- Prevent XSS and injection vulnerabilities.

---

## 11. Styling & Design Standards

Design System: Google Antigravity Premium

- Glassmorphism (blur + translucency) where applicable.
- Fluid typography using clamp().
- Framer Motion for micro-interactions.
- WCAG 2.1 AA accessibility compliance mandatory.
- Minimum tap target: 44px.
- No inline styles except for dynamic values.

---

## 12. Clean Code Enforcement

- No unused imports.
- No commented-out dead code.
- No deep relative imports.
- DRY strictly enforced.
- Keep functions pure when possible.
- No TODO comments in production-ready code.

---

## 13. Implementation Protocol

Before complex implementation:

Thought Process
Server vs Client state separation

Query invalidation strategy

Route protection strategy

Form validation edge cases

Performance implications

yaml
Copy code

After implementation:

Red Team Review
Query key collisions?

Over-fetching?

Unnecessary re-renders?

Security risks?

DRY violations?

yaml
Copy code

---

## 14. Production Readiness Checklist

- All server state handled via React Query.
- No useEffect data fetching.
- All forms validated using Yup.
- Routes lazy-loaded.
- Queries properly invalidated.
- No console logs.
- ESLint passes.
- Accessibility verified.
- Performance validated.

---