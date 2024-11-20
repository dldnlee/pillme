// app/pharmacist/completed/page.tsx
const CompletedPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">조제 완료 처방전</h1>
      {/* Add content for this page */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-lg p-4 bg-white shadow-sm">
            <p>약품명: Sample Drug {item}</p>
            <p>1회 투약량: 500mg</p>
            <p>1일 투약횟수: 3회</p>
            <p>총 투약일수: 7일</p>
            <p>※ 주의사항: Sample Caution</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedPage;
