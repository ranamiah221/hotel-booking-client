import { useForm } from "react-hook-form";

const AddRooms = () => {
  const handleAddRooms = (event) => {
    event.preventDefault();
  };

  return (
        <div className=" bg-base-100 w-full  shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Add Rooms!</h1>
          <form className="card-body w-4/5 mx-auto">
            <div className="flex justify-between items-center gap-5">
                   <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
                    </div>
                   <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
                   </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
     
  );
};

export default AddRooms;
