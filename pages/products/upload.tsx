import Button from "@components/common/Button";
import Table from "@components/common/Table";
import Layout from "@components/layout";
import { PRODUCT_LIST_THEADS, UPLOAD_FORM_LABELS } from "@constants/products";

const ProductUploadPage = () => {
  return (
    <Layout title="물품 등록">
      <div className="space-y-10">
        <form>
          <div className="mb-2 flex justify-end">
            <Button color="green" value="추가" />
          </div>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-[auto_auto_auto_auto] overflow-hidden rounded-md border border-borderColor text-sm">
            {UPLOAD_FORM_LABELS.map((data) => (
              <div
                key={data.id}
                className="flex items-center border-b border-borderColor last:border-none [&:nth-child(4)]:border-none"
              >
                <label
                  htmlFor={data.id}
                  className="block w-36 bg-primary py-1 text-center leading-normal text-white"
                >
                  {data.name}
                </label>
                {data.isStatic ? (
                  <span className="mx-2">11</span>
                ) : (
                  <input
                    id={data.id}
                    type="text"
                    className="mx-1 h-fit w-[calc(100%-9.5rem)] rounded-sm border border-borderColor bg-transparent py-[0.1rem] px-1 outline-none"
                  />
                )}
              </div>
            ))}
          </div>
        </form>
        <div className="space-y-2">
          <div className="flex justify-end gap-2">
            <Button color="green" value="엑셀 등록" />
            <Button color="green" value="등록하기" />
          </div>
          <Table thead={PRODUCT_LIST_THEADS} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductUploadPage;
