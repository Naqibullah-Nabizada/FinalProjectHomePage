import { FaUserTie , FaClipboardList,FaPlusCircle } from 'react-icons/fa';

const menutitles = [
    {
        id: 0,
        href: '/supplies/depot-list',
        iconName: FaClipboardList,
        content: "لیست اجناس موجود در دیپو"
    },
    {
        id: 1,
        href: 'supplies/depot/',
        iconName: FaPlusCircle,
        content: "فورمه م 7 - راپور رسید اجناس/خدمات"
    },
    {
        id: 2,
        href: './students',
        iconName: FaUserTie,
        content: "فورمه ف س 5- راپور رسید اجناس/خدمات"
    },
    {
        id: 3,
        href: '../',
        iconName: FaUserTie,
        content: "بازگشت به صفحه اصلی"
    },
]

export default menutitles;