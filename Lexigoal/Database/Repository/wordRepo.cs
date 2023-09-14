using Lexigoal.MVVM.Model.DAL;
using Lexigoal.MVVM.Model.Types;
using System.Collections.Generic;
using System.Data;

namespace Lexigoal.MVVM.Model.Repository
{
	public class wordRepo
    {
        /**
         * CRUD operations for wordModel
         * 
         * Create a new word
         * Read a word
         * Update a word
         * Delete a word
         */

        #region Fields
        private readonly DataAccess db = new();
		#endregion

		#region Public Methods - Synchronous
        public WordModel CreateWord(WordModel word)
        {
			List<ParmStruct> parms = new() 
            {
                new("@word", SqlDbType.NVarChar, word.word)
            };

            if (db.ExecuteNonQuery("spInsertWord", parms) > 0)
                return word;
            else
                throw new DataException("An Error occured while adding a new word");
		}
		#endregion

	}
}
