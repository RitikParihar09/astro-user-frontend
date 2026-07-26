import { FaBell, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, userName } = useAuth();

  return (
    <div className="bg-[#f8c9c1] rounded-b-[28px] px-5 pt-5 pb-5">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={
              isLoggedIn
                ? "https://randomuser.me/api/portraits/women/65.jpg"
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-white bg-white"
          />

          <div>
            <h2 className="text-[18px] font-bold text-[#222] leading-none">
              {isLoggedIn ? (userName || "Astro User") : "Guest User"}
            </h2>

            <p className="text-gray-700 text-[13px] mt-1">
              {isLoggedIn ? (
                (() => {
                  try {
                    const userObj = JSON.parse(localStorage.getItem("user") || "{}");
                    return userObj.uniqueId ? `ID: ${userObj.uniqueId}` : "Welcome back!";
                  } catch {
                    return "Welcome back!";
                  }
                })()
              ) : "Explore Astrology Services"}
            </p>
          </div>
        </div>

        <div className="flex gap-2">

          {/* Notification Icon */}
          <div
            onClick={() => navigate("/notifications")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center cursor-pointer hover:bg-orange-100"
          >
            <FaBell size={18} />
          </div>

          {/* Wallet Icon */}
          {isLoggedIn && (
            <div
              onClick={() => navigate("/wallet")}
              className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center cursor-pointer hover:bg-orange-100 transition-colors"
            >
              <FaWallet size={18} className="text-gray-700" />
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Header;