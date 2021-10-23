import webexteamssdk

from app import app
from setup_api import v1

from blacklist_handler import BlacklistHandler
from encoder import JWTEncoder
from flask import request
from flask_restx import Resource


@v1.route('/token/invalidate')
class TokenInvalidateApi(Resource):
    # Is a get request so users can click link from webex teams to invalidate old tokens or
    # tokens that may not have been generated by them.
    def get(self):
        token = request.args.get('token')
        # This will throw an error if token is not valid already
        # just ignore these
        try:
            decoded = JWTEncoder().decode(token)
            if BlacklistHandler().exists(token):
                return {
                    'data': {'success': True},
                    'message': {
                        'text': 'Temporary code is already invalidated.',
                        'priority': 'success'
                    }
                }
            BlacklistHandler().add(token, expiration=decoded['exp'])

            # Delete webex message with temporary code
            webexteamssdk.WebexTeamsAPI(app.config['WEBEX_TEAMS_ACCESS_TOKEN']).messages.delete(
                messageId=decoded['messageId']
            )
        except:
            pass

        return {
            'data': {'success': True},
            'message': {
                'text': 'Successfully invalidated temporary code.',
                'priority': 'success'
            }
        }


