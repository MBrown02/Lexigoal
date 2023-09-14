using Lexigoal.MVVM.Model;
using Lexigoal.MVVM.Model.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Lexigoal.Database.Service
{
    public class wordService
    {
		#region Fields
		private readonly wordRepo repo = new();
		#endregion

		#region Public Methods - Synchronous
		public WordModel createWord(WordModel word)
		{
			if(ValidateWord(word))
				return repo.CreateWord(word);

			return word;
		}
		#endregion

		#region Private Methods

		#endregion
	}
}
