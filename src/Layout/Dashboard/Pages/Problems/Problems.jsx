import Table from "./ProblemnComponents/Table";

const Problems = () => {
  return (
    <div className="max-w-screen-xl py-10 mx-auto">
      <div className="grid gap-2 md:gap-5 grid-cols-3 md:grid-cols-5">
        <div className="p-1 md:p-5 flex items-center flex-col shadow-md rounded-md bg-slate-50">
          <h1 className="text-xl md:text-4xl font-bold">Class 8</h1>
          <p className="text-sm md:text-xl font-medium">Math problems</p>
        </div>
        <div className="p-1 md:p-5 flex items-center flex-col shadow-md rounded-md bg-slate-50">
          <h1 className="text-xl md:text-4xl font-bold">Class 9</h1>
          <p className="text-sm md:text-xl font-medium">Math problems</p>
        </div>
        <div className="p-1 md:p-5 flex items-center flex-col shadow-md rounded-md bg-slate-50">
          <h1 className="text-xl md:text-4xl font-bold">Class 10</h1>
          <p className="text-sm md:text-xl font-medium">Math problems</p>
        </div>
        <div className="p-1 md:p-5 flex items-center flex-col shadow-md rounded-md bg-slate-50">
          <h1 className="text-xl md:text-4xl font-bold">Class 11</h1>
          <p className="text-sm md:text-xl font-medium">Math problems</p>
        </div>
        <div className="p-1 md:p-5 flex items-center flex-col shadow-md rounded-md bg-slate-50">
          <h1 className="text-xl md:text-4xl font-bold">Class 12</h1>
          <p className="text-sm md:text-xl font-medium">Math problems</p>
        </div>
      </div>
      <div className="grid py-5 gap-5 grid-cols-12">
        <div className="shadow-md rounded-md bg-slate-50 min-h-screen col-span-9">
            <Table></Table>
        </div>
        <div className="shadow-md rounded-md bg-slate-50 col-span-3"></div>
      </div>
    </div>
  );
};

export default Problems;
