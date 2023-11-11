import { useGetAllReviews } from "../../hooks/useReviewQuery";
import { Br } from "../common/Br.component";
import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";

export const ProductReviews = ({ productId }) => {
  const { reviews } = useGetAllReviews({ productId });
  return (
    <>
      <Br className="py-5" />
      <Txt typography="h3" colors="prmiary">
        리뷰
      </Txt>
      {reviews.length === 0 && (
        <Txt typography="h4" colors="secondary" className="block py-5">
          아직 등록된 리뷰가 없습니다.
        </Txt>
      )}
      <div className="flex flex-col gap-4 divide-y pb-12">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-4 pt-4">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={review.idCardImagePath}
              alt={review.nickname}
            />
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full justify-between">
                <Txt typography="h5" className="flex-1">
                  {review.nickname}
                </Txt>
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      type={review.star > index ? "fillStar" : "star"}
                      className="fill-[#62AB05]"
                    ></Icon>
                  ))}
                </span>
              </div>
              <Txt>{review.content}</Txt>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
