import React from 'react';

interface KakaoLoginButtonProps {
    className?: string;
}

const KakaoLoginButton: React.FC<KakaoLoginButtonProps> = ({ className = '' }) => {
    const handleLogin = (): void => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
    };

    return (
        <button
            onClick={handleLogin}
            className={`flex items-center justify-center gap-2 bg-[#FEE500] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#FEE500]/90 transition-all w-full max-w-xs ${className}`}
            type="button"
        >
            <img
                src="../assets/kakao_login_medium_narrow.png"
                alt="Kakao Logo"
                className="w-6 h-6"
                onError={(e: React.SyntheticEvent<HTMLImageElement>): void => {
                    e.currentTarget.style.display = 'none';
                }}
            />
            카카오로 시작하기
        </button>
    );
};

export default KakaoLoginButton;