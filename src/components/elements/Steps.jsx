export default function Steps({ steps, next }) {
  return (
    <nav aria-label="Progress">
      <ol className="space-y-4 md:flex md:space-y-0 md:space-x-4">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === "complete" || step.status === "current" ? (
              <span className="group pl-4 py-2 flex flex-col border-l-4 border-tph_orange hover:border-tph_orange_hover md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                <span className="text-xs text-tph_orange font-semibold tracking-wide uppercase group-hover:text-tph_orange_hover">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </span>
            ) : (
              <span className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
