export default function PickWeekWrapper({ children }) {
  return (
    <div data-class="pick-of-the-week-section">
      <div
        data-class="wrap"
        className="max-w-[1200px] my-0 mx-auto px-4 after:content-[''] after:table after:clear-both"
      >
        {children}
      </div>
    </div>
  );
}
