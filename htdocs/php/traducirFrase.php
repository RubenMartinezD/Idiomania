<?php
use Google\Cloud\Translate\V2\TranslateClient;
$translationServiceClient = new TranslationServiceClient();
try {
    $contents = ["I like shorts. They are easy and comfy to wear"];
    $targetLanguageCode = 'ru';
    $formattedParent = $translationServiceClient->locationName('Idiomania', 'Z:\Xampp\idiomania_doc\future-sunrise-350010-2c90bf740e1a.json');
    $response = $translationServiceClient->translateText($contents, $targetLanguageCode, $formattedParent);
    echo ($response);
} finally {
    $translationServiceClient->close();
}
?>