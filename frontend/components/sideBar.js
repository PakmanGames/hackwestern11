import SidebarTopArticle from "./sideBarTopArticle";
import SidebarTinyArticle from "./sideBarTinyArticle";
import SidebarLongArticle from "./sideBarLongArticle";

export default function SideBar() {
    return (
        <div>
            <SidebarTopArticle />
            <div className="flex justify-between p-4 border-t">
                <SidebarTinyArticle />
                <SidebarTinyArticle />
            </div>
            <SidebarLongArticle />
            <SidebarLongArticle />
            <SidebarLongArticle />
        </div>
    );
}