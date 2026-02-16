---
trigger: always_on
---

# Antigravity React.js Governance Rules  
(JavaScript + React Router DOM + TanStack Query + React Hook Form + Yup)

---

# 1. Stack Enforcement

- React (Functional Components Only)
- JavaScript (ES2022+)
- React Router DOM (v6+)
- TanStack React Query (Server State)
- React Hook Form (Primary)
- Formik (Legacy / Complex Only)
- Yup (Validation)
- Tailwind CSS (Styling System)
- Framer Motion (Mandatory for transitions)

Class components are strictly prohibited.

---

# 2. Architecture & Folder Structure

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
theme/

yaml
Copy code

Rules:
- UI → components
- Logic → hooks
- API → services
- Validation → validation
- Shared reusable code → shared
- Theme tokens → theme

---

# 3. Component Design Rules

- Single Responsibility Principle enforced.
- Max 200 lines per component (soft limit).
- No nested ternaries.
- Avoid deeply nested JSX.
- Extract reusable UI patterns immediately.
- Composition over prop drilling.
- No inline business logic inside JSX.

---

# 4. API & Server State Governance (TanStack Query)

Mandatory:
- No `useEffect` data fetching.
- No direct `fetch` / `axios` in components.
- All API calls must live inside `/services`.
- All server state handled via React Query.

Query Rules:
- Query keys must use array format: `['resource', id]`
- Stable and consistent naming.
- Use `select` for data transformation.
- Set intentional `staleTime`.
- Avoid unnecessary refetching.

Mutation Rules:
- Use `useMutation` for all writes.
- Invalidate relevant queries.
- Implement optimistic updates when needed.
- Rollback on failure.

Every query must handle:
- Loading
- Error
- Empty state

---

# 5. Routing Governance (React Router DOM)

- Use nested routes for feature isolation.
- Use layout routes for shared sections.
- Lazy-load route components.
- Protected routes must use wrapper.
- Validate route params.
- No business logic inside route definitions.

---

# 6. Form Governance

Default: React Hook Form.

Rules:
- Use `useForm` for all new forms.
- Use `Controller` only when required.
- No manual form state management.
- Avoid unnecessary re-renders.

Validation:
- All forms must use Yup schemas.
- Validation schemas live in `/validation`.
- No inline validation logic.

Formik:
- Only allowed for complex multi-step or legacy forms.

---

# 7. State Management Rules

- Keep state local whenever possible.
- Do not duplicate derived state.
- Never mutate state.
- Use functional updates.
- Complex state must move to custom hooks.

---

# 8. Performance Standards

- Prevent unnecessary re-renders.
- Avoid inline object/array creation inside JSX.
- Memoize only when measurable benefit exists.
- Lazy-load heavy components.
- Lists must use stable keys.
- Avoid O(n²) rendering logic.

---

# 9. Error Handling & Resilience

- All async operations wrapped in try/catch.
- Errors normalized in service layer.
- Use feature-level Error Boundaries.
- No console.log in production.

---

# 10. Security Standards

- No hardcoded secrets.
- Validate inputs via Yup.
- Sanitize user content.
- Validate route params.
- Centralized 401/403 handling.
- Prevent XSS vulnerabilities.

---

# 11. Global Theme & Styling Governance

## 11.1 Centralized Theme System

All styling must be theme-driven.

Theme must define:
- Color palette
- Typography scale
- Spacing scale
- Border radius scale
- Shadow system
- Z-index scale
- Animation timing scale

No hardcoded:
- Colors
- Font sizes
- Spacing values
- Border radius values

Use design tokens only.

Example:
- `bg-primary`
- `text-muted`
- `rounded-lg`
- `shadow-glass`

---

## 11.2 Avoiding Unwanted White Space

### Strict Layout Rules

- Use consistent spacing scale (4px / 8px grid).
- No random margin or padding values.
- Avoid stacking margins vertically (use gap instead).
- Prefer `flex` or `grid` with `gap`.
- No excessive wrapper divs.
- Avoid double padding (parent + child).
- Avoid unnecessary `mt-8` stacking without layout reasoning.

### Container Discipline

- Every page must use a layout container.
- Maintain consistent max-width.
- No full-width content unless intentional.
- Use vertical rhythm consistency.

### Vertical Rhythm Rule

Spacing between sections must follow:
- Section → 48px / 64px
- Component blocks → 24px / 32px
- Element spacing → 8px / 16px

No arbitrary spacing.

---

## 11.3 Visual Consistency Rules

- Buttons must use standardized variants.
- Inputs must follow unified size system.
- Cards must use consistent padding.
- No custom shadows outside theme.
- No inconsistent border radius usage.
- Maintain consistent icon size scale.

---

## 11.4 Theme Integrity Enforcement

- Dark/Light mode must use same design tokens.
- No direct hex colors in components.
- No inline style overrides.
- Theme switching must not break contrast.
- All colors must meet WCAG 2.1 AA contrast.

---

## 11.5 Spacing Audit Checklist

Before marking UI complete:

- Is spacing consistent across sections?
- Are margins replaced by layout gap where possible?
- Any unnecessary wrappers?
- Any duplicate padding?
- Does layout feel balanced visually?
- Is there unexpected scroll gap?
- Is there extra white space on mobile?

---

# 12. Micro-Interactions & Animation

- Framer Motion required for transitions.
- Use subtle motion (150–300ms).
- No aggressive bounce animations.
- Animation must not block interaction.
- Respect reduced motion preference.

---

# 13. Clean Code Enforcement

- No unused imports.
- No dead commented code.
- No deep relative imports.
- DRY strictly enforced.
- Keep functions pure where possible.
- No TODO in production-ready code.

---

# 14. Implementation Protocol

Before complex implementation:

Thought Process
Server vs Client state separation

Query invalidation strategy

Route protection strategy

Form validation edge cases

Layout spacing impact

Theme consistency impact

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

Inconsistent spacing?

Theme token violations?

Accessibility contrast issues?

yaml
Copy code

---

# 15. Production Readiness Checklist

- All server state via React Query.
- No useEffect data fetching.
- All forms validated using Yup.
- Routes lazy-loaded.
- Queries properly invalidated.
- No console logs.
- ESLint passes.
- Accessibility verified.
- Spacing audited.
- Theme tokens enforced.
- No arbitrary styling.
- Performance validated.

---








