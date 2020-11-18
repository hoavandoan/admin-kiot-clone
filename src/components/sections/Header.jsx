import React from 'react';

const Header = () => {
    return (
        <section id="header" className="w-full">
            <div id="header__links" className="container mx-auto flex justify-between">
                <div>Kiot Viet</div>
                <div className="flex py-3">
                    <button className="py-2 px-6 hover:bg-gray-300 rounded font-bold">nghiavd123456</button>
                </div>
            </div>
            <div id="app-bar" className="bg-blue-500">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <button className="py-3 px-6 hover:bg-blue-600 rounded text-white focus:outline-none">Tổng quan</button>
                        <button className="py-3 px-6 hover:bg-blue-600 rounded text-white focus:outline-none">Hàng hóa</button>
                        <button className="py-3 px-6 hover:bg-blue-600 rounded text-white focus:outline-none">Giao dịch</button>
                        <button className="py-3 px-6 hover:bg-blue-600 rounded text-white focus:outline-none">Đối tác</button>
                        <button className="py-3 px-6 hover:bg-blue-600 rounded text-white focus:outline-none">Nhân viên</button>
                    </div>
                    <div>
                        <button className="py-3 px-6 bg-blue-800 hover:bg-blue-900 rounded text-white focus:outline-none">Facebook</button>
                        <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded text-white focus:outline-none">Bán hàng</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
