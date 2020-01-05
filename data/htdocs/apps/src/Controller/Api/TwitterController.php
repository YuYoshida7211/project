<?php
namespace App\Controller\Api;

require "vendor/autoload.php";
use Cake\Controller\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;

class twitterController extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index($mode = null) {

        // twitterのコネクション生成に必要な情報を設定
        $consumerKey = "MdCFvSj79eUE0uWPzlfM1cSyH";
        $consumerSecret = "P22a0RP9mDy4nVyDueMb6vYSrbodc3dttwXAWJTC0ODrU0TOQT";
        $accessToken = "1118130091672735744-AKjMsdSOTkNRRsDkVjurLv3SZiHKOG";
        $accessTokenSecret = "BXGy6jMWRmCpcbRBnUmclrhOlkfsHojun3uJ6kFAG1ce5";

        // コネクションを生成
        $connection = new TwitterOAuth ( $consumerKey, $consumerSecret, $accessToken, $accessTokenSecret );

        // トレンドワード取得
        $request = $connection->OAuthRequest(
            "https://api.twitter.com/1.1/trends/place.json","GET",array("id"=>"1118370")
        ); //idは地域を表している　1118370＝東京　1118550=横浜
        $json_array = json_decode($request,true);

        $trend_posts = array();
        for ($i = 0; $i < 10; $i++){
            $trend_word = $json_array[0]['trends'][$i]['name'];

            // キーワード検索してtweetを取得する
            $statuses = $connection->get ( 'search/tweets', array (
            'lang' => 'ja',
            'q' => $trend_word,
            'result_type' => 'recent', // 最新投稿
            'tweet_mode' => 'extended', //全文取得
            'count' => '10'
            ) );
            $posts = array();
            foreach ($statuses->statuses as $key => $value) {
                $post = array();
                $post['created_at'] = $value->created_at;
                $post['tweet_id'] = $value->id;
                $post['text'] = $value->full_text;
                $post['media'] = isset($value->entities->media) ? $value->entities->media : null;
                $post['user_name'] = $value->user->name;
                $post['user_screen_name'] = $value->user->screen_name;
                $post['profile_image_url'] = $value->user->profile_image_url;
                array_push($posts , $post);
            }

            $trend_post["trend_word"] = $trend_word;
            $trend_post["items"] = $posts;
            array_push($trend_posts , $trend_post);
        }

        // ApiShellにjsonを返す
        return json_encode($trend_posts, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

    }
}