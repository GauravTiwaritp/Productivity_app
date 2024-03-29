import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/Modal/ModalSlice";

function Modal() {
  const { isOpen } = useSelector((store) => {
    return store.modal;
  });

  const [task, setTask] = useState({
    title: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...value,
      [name]: value,
    });
    console.log(task);
  };

  console.log(isOpen);
  const dispatch = useDispatch();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        className="relative z-10"
        onClose={() => dispatch(closeModal())}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* <div className="fixed inset-0 bg-black bg-opacity-25 " /> */}
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 pb-2"
                >
                  Add a Task
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Enter a task here"
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
