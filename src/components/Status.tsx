interface Item {
    status: string;
}

interface StatusProps {
    item: Item;
}

const Status: React.FC<StatusProps> = ({ item }) => {
    const status = () => {
        if (item.status === 'Alive') {
            return 'bg-green-700';
        } else if (item.status === 'Dead') {
            return 'bg-red-700';
        } else {
            return 'bg-zinc-700';
        }
    };

    return (
        <div
            className={`${status()} w-10 h-10 xl:w-7 xl:h-7 absolute rounded-full right-12 xl:right-6 top-10 xl:top-6 border-4 border-rick `}
        ></div>
    );
};

export default Status;
