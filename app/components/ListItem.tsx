interface ListItemProps {
  name: string;
  oneDayAmount: string;
  oneDayFreq: string;
  medPeriod: string;
  caution: string;
}

const ListItem = ({name, oneDayAmount, oneDayFreq, medPeriod, caution} : ListItemProps) => {
  return (
    <div className="flex items-center justify-start w-full p-2 gap-2 border border-primary rounded-lg">
      <div className="size-[100px] flex-shrink-0 flex bg-gray-300"></div>
      <div className="flex flex-col w-full">
        <p>약품명: {name}</p>
        <p>1회투약량: {oneDayAmount}</p>
        <p>1일투약횟수: {oneDayFreq}</p>
        <p>총투약일수: {medPeriod}</p>
        <p className="truncate w-[200px]">주의사항: {caution}</p>
      </div>
    </div>
  )
}

export default ListItem;