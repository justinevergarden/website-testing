import { Filters } from './types';

const AppliedFilters = ({ filters }: { filters: Filters }) => {
    // Check if any filter has a value
    const isAnyFilterApplied = Object.values(filters).some((value) => value);

    if (!isAnyFilterApplied) {
        // If no filter has been applied, it renders nothing
        return null;
    }

    return (
        <div className="flex justify-center">
            <div className="flex rounded-md flex-col sm:flex-row w-auto h-auto p-4 bg-[#212121] text-morty border-4 border-rick sm:gap-4 sm:items-center">
                <h2 className="font-bold text-lg ">Applied Filters:</h2>
                {Object.entries(filters).map(
                    ([key, value]): React.ReactNode =>
                        value && (
                            <p key={key} className="flex gap-1">
                                <span className="">{`${
                                    key.charAt(0).toUpperCase() + key.slice(1)
                                }: `}</span>
                                <span className="text-white">
                                    {` ${value}.`}
                                </span>
                            </p>
                        )
                )}
            </div>
        </div>
    );
};

export default AppliedFilters;
