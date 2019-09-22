import { DateTime } from 'luxon';
import storageManager from './storage';
const authKey = 'matchaSessionEnd';

export default {
  /** 
   * Checks if the user is authenticated.
   * @returns string - difference in seconds returned when authenticated.
  */
  checkIfAuthenticated: (callback) => {
    let currentDT = DateTime.local();
    let userStartDT = DateTime.fromISO(storageManager.getItem(authKey));

    if (!storageManager.checkIfExists(authKey) || currentDT > userStartDT) {
      callback();
    } else {
      callback(currentDT.diff(userStartDT, 'seconds').as('seconds'));
    }
  },
  /** 
   * Authorizes a user by setting a time limit on the session.
   * @returns string - time limit generated
   */
  authorize: () => {
    storageManager.setItem(authKey, DateTime.local().plus({ minutes: 15 }).toISO());
    return storageManager.getItem(authKey);
  }
};