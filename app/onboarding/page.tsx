import { OnboardingLayout } from './OnboardingLayout';
import { OnboardingSteps } from './OnboardingSteps';

export default function page() {
  return (
    <OnboardingLayout>
      <OnboardingSteps />
    </OnboardingLayout>
  );
}