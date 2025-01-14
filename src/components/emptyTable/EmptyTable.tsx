import './emptyTable.less';


const EmptyIcon = () => (<svg className="icon" viewBox="0 0 1598 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    width="64" height="40">
    <path d="M0 849.170732a799.219512 174.829268 0 1 0 1598.439024 0 799.219512 174.829268 0 1 0-1598.439024 0Z"
        fill="#F5F5F5"></path>
    <path
        d="M1373.658537 343.66439L1120.256 56.394927C1108.092878 36.814049 1090.33522 24.97561 1071.628488 24.97561H526.810537c-18.706732 0-36.46439 11.838439-48.627513 31.394341L224.780488 343.689366V574.439024h1148.878049v-230.774634z"
        fill="#FFFFFF"></path>
    <path
        d="M1071.628488 12.487805H526.810537c-23.177366 0-44.806244 14.086244-59.242147 37.288585L212.292683 338.968976V586.926829h1173.853658v-247.957853L1129.646829 48.128C1116.409756 26.574049 1094.780878 12.487805 1071.603512 12.487805z m0 24.97561l3.446634 0.199805c12.68761 1.373659 25.250341 10.314927 34.591219 25.300292l251.479415 285.396293V561.95122h-1123.902439v-213.56644l250.305561-283.722926c11.413854-18.057366 25.450146-27.198439 39.261659-27.198439h544.817951z"
        fill="#D9D9D9"></path>
    <path
        d="M1039.310049 422.862049c0-40.085854 24.825756-73.178537 55.620683-73.203512H1373.658537v452.982634C1373.658537 855.66439 1340.690732 899.121951 1299.980488 899.121951h-1001.521951C257.748293 899.121951 224.780488 855.639415 224.780488 802.641171V349.658537h278.727805c30.794927 0 55.620683 33.042732 55.620683 73.128585v0.549463c0 40.085854 25.100488 72.454244 55.870439 72.454244h368.440195c30.769951 0 55.870439-32.668098 55.870439-72.753951v-0.149854z"
        fill="#FAFAFA"></path>
    <path
        d="M503.508293 337.170732H212.292683v465.470439c0 59.367024 37.788098 108.968585 86.165854 108.968585h1001.521951c48.377756 0 86.165854-49.601561 86.165853-108.968585V337.170732H1094.930732c-37.138732 0-66.035512 36.539317-68.008586 81.070829l-0.099902 4.795317c0 33.792-20.330146 60.266146-43.382634 60.266146H614.999415c-22.103415 0-41.609366-23.976585-43.282732-55.620683l-0.099903-4.895219c0-46.47961-29.646049-85.61639-68.108487-85.61639zM237.268293 802.641171L237.243317 362.146341H503.508293c21.928585 0 41.35961 24.401171 43.008 56.270049l0.124878 4.920195c0 46.329756 29.820878 84.942049 68.358244 84.942049h368.440195c37.188683 0 66.285268-36.214634 68.258341-80.621268l0.224781-9.166049c1.64839-31.893854 21.10439-56.344976 43.008-56.344976h266.215024l0.024976 440.49483c0 46.829268-28.322341 83.992976-61.190244 83.992975h-1001.521951c-32.867902 0-61.190244-37.163707-61.190244-83.992975z"
        fill="#D9D9D9"></path>
</svg>)

const EmptyTable = (props: {
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
    /**
     * Custom icon
     */
    SearchIcon?: JSX.Element | string;
    /**
     * empty text
     */
    emptyText?: string;
    /**
     * search text
     */
    searchText?: string;
    /**
     * searching status
     */
    onSearch?: boolean;
    /**
     * reset callback
     */
    onReset?: () => void;
}) => {
    const {
        className,
        style,
        onReset,
        onSearch = false,
        SearchIcon = EmptyIcon(),
        emptyText = '暂无数据',
        searchText
    } = props;

    return (
        <div className={`empty-table ${className}`} style={style}>
            {onSearch && onReset ? (
                <span>
                    暂未找到符合条件的数据，
                    <a className="empty-table-reset" onClick={() => onReset?.()}>
                        重置筛选条件
                    </a>
                </span>
            ) : onSearch && searchText ? (
                <div className="empty-table-noresult-img">
                    {typeof SearchIcon === 'string' ? <img src={SearchIcon} /> : SearchIcon}
                    <div className="empty-table-description">{searchText || '暂无数据'}</div>
                </div>
            ) : (
                <div className="empty-table-noresult-img">
                    {typeof SearchIcon === 'string' ? <img src={SearchIcon} /> : SearchIcon}
                    <div className="empty-table-description">{emptyText}</div>
                </div>
            )}
        </div>
    );
};

export default EmptyTable;
