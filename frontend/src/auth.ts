import axios from 'axios';

interface RegisterUserPayload {
    username: string;
    email: string;
    password: string;
}

interface RegisterUserResponse {
    success: boolean;
    message: string;
}

export const // ユーザー登録を行う非同期関数
    registerUser = async (
        payload: RegisterUserPayload // ユーザー登録に必要なデータを含むオブジェクト
    ): Promise<RegisterUserResponse> => {
        // 登録結果を返すPromise
        try {
            // サーバーにPOSTリクエストを送信してユーザーを登録
            const response = await axios.post<RegisterUserResponse>(
                '/api/auth/register', // ユーザー登録APIのエンドポイント
                payload // リクエストボディとして送信するデータ
            );
            // サーバーからのレスポンスデータを返す
            return response.data;
        } catch (error) {
            // エラーがAxiosのエラーであり、レスポンスが存在する場合
            if (axios.isAxiosError(error) && error.response) {
                return {
                    success: false, // 登録失敗を示すフラグ
                    message:
                        error.response.data.message || 'Registration failed', // サーバーからのエラーメッセージまたはデフォルトメッセージ
                };
            }
            // その他の予期しないエラーの場合
            return {
                success: false, // 登録失敗を示すフラグ
                message: 'An unexpected error occurred', // デフォルトのエラーメッセージ
            };
        }
    };
