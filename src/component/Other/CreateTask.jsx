import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className="min-h-screen w-full bg-gray-100 p-10">
      {/* <Header /> */}
      <div className="mt-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              placeholder="Describe the task details..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            ></textarea>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Date</h3>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Assign to</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Category</h3>
            <input
              type="text"
              placeholder="Design, Dev, etc..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 text-white rounded-lg text-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-600 transition duration-200"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateTask