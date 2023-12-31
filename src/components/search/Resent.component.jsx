import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";

const resentKeywords = [
  "맥북 프로",
  "갤럭시S23",
  "LG 그램 16",
  "에어팟 프로 2",
  "공학 수학",
];
export const ResentSearch = () => {
  return (
    <div className="py-8">
      <Txt typography="h4" className="block py-2">
        최근 검색어
      </Txt>
      <div className="flex flex-wrap gap-2">
        {resentKeywords.map((keyword) => {
          return (
            <div
              key={keyword}
              className="flex w-fit items-center gap-1 rounded-md border border-black px-2"
            >
              <button>{keyword}</button>
              <button>
                <Icon type="close" size="small" className="fill-gray-500" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
